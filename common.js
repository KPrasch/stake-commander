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

async function init_ui() {
    var default_account = (await web3.eth.getAccounts())[0];
    $('#staking-account').text(default_account);

    var balance = (parseInt(await token.methods.balanceOf(default_account).call()) / 1e18).toFixed(3);
    $('#stake-value').val(balance);
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
