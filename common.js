var infura_url = 'https://mainnet.infura.io/';
var staking_escrow;
var token;

function init_menu() {
    $("div.top-menu-bar a").toArray().forEach(function(el) {
        if (el.href == window.location.href)
            el.classList.add('selected')
    })
}

function init_contracts() {
    staking_escrow = new web3.eth.Contract(staking_escrow_abi, staking_escrow_address);
    token = new web3.eth.Contract(token_abi, token_address);
}

async function approve(amount) {
    var default_account = (await web3.eth.getAccounts())[0];
    return new Promise(resolve => {
        token.methods.approve(staking_escrow_address, amount)
        .send({'from': default_account})
        .once('transactionHash', function(hash) {resolve(true);});
    });
}

async function handle_stake() {
    var default_account = (await web3.eth.getAccounts())[0];
    var balance = $('#stake-value').val();
    var duration = parseInt($('#stake-duration').val());
    balance = (BigInt(parseFloat(balance) * 1000) *
               BigInt('1000000000000000000') / BigInt('1000')).toString();  // how to do this shit better??

    if (await token.methods.allowance(default_account, staking_escrow_address).call() != 0)
        await approve(0);
    await approve(balance);
    await staking_escrow.methods.deposit(balance, duration).send({'from': default_account});
}

async function init_ui() {
    var default_account = (await web3.eth.getAccounts())[0];
    $('#staking-account').text(default_account);

    var balance = (parseInt(await token.methods.balanceOf(default_account).call()) / 1e18).toFixed(3);
    $('#stake-value').val(balance);

    $("#do-stake").click(handle_stake);
}

window.addEventListener('load', async () => {
    init_menu();

    if (window.ethereum)
    {
        window.web3 = new Web3(ethereum);
        await ethereum.enable();
    }
    else
        window.web3 = new Web3(infura_url);
    init_contracts();
    await init_ui();
});
