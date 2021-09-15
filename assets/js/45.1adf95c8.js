(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{437:function(e,a,t){"use strict";t.r(a);var s=t(5),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"key-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-management"}},[e._v("#")]),e._v(" Key Management")]),e._v(" "),t("p",[e._v("Every Terra account is associated with different key representations, which can be deterministically generated from the account's private key.")]),e._v(" "),t("h3",{attrs:{id:"account-address-terra"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#account-address-terra"}},[e._v("#")]),e._v(" Account Address "),t("code",[e._v("terra-")])]),e._v(" "),t("p",[e._v("This is the address you give to others in order to receive funds, e.g. "),t("code",[e._v("terra15h6vd5f0wqps26zjlwrc6chah08ryu4hzzdwhc")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("account_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"validator-address-terravaloper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#validator-address-terravaloper"}},[e._v("#")]),e._v(" Validator Address "),t("code",[e._v("terravaloper-")])]),e._v(" "),t("p",[e._v("This is the address that uniquely identifies a validator and is used to invoke staking commands. Each account address has a corresponding validator address, and vice-versa.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("account_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --bech"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("val\n")])])]),t("h3",{attrs:{id:"consensus-address-terravalcons"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consensus-address-terravalcons"}},[e._v("#")]),e._v(" Consensus Address "),t("code",[e._v("terravalcons-")])]),e._v(" "),t("p",[e._v("The consensus address is generated when the node is created with "),t("code",[e._v("terrad init")]),e._v(", and serves to identify the Tendermint signing key for the node, NOT the operator (account holder).")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terrad tendermint show-validator\n")])])]),t("h2",{attrs:{id:"generate-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-keys"}},[e._v("#")]),e._v(" Generate Keys")]),e._v(" "),t("p",[e._v("You'll need an account private and public key pair (a.k.a. "),t("code",[e._v("sk, pk")]),e._v(" respectively) to be able to receive funds, send funds, creating bonding transactions, etc.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("It is more secure to perform this action on an offline computer.")])]),e._v(" "),t("p",[e._v("To generate an account, just use the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("yourKeyName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("ul",[t("li",[t("code",[e._v("<yourKeyName>")]),e._v(" is the name of the account. It is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.")]),e._v(" "),t("li",[e._v("You can add the optional "),t("code",[e._v("--account")]),e._v(" flag to specify the path ("),t("code",[e._v("0")]),e._v(", "),t("code",[e._v("1")]),e._v(", "),t("code",[e._v("2")]),e._v(", ...) you want to use to generate your account. By default, account "),t("code",[e._v("0")]),e._v(" is generated.")])]),e._v(" "),t("p",[e._v("The command will generate a 24-words mnemonic and save the private and public keys for account "),t("code",[e._v("0")]),e._v(" at the same time. You will be prompted to input a passphrase that is used to encrypt the private key of account "),t("code",[e._v("0")]),e._v(" on disk. Each time you want to send a transaction, this password will be required. If you lose the password, you can always recover the private key with the mnemonic.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("Do not lose or share your 24 words with anyone.")]),e._v(" "),t("p",[e._v("To prevent theft or loss of funds, it is best to ensure that you keep multiple copies of your mnemonic, and store it in a safe, secure place and that only you know how to access.")]),e._v(" "),t("p",[e._v("If someone is able to gain access to your mnemonic, they will be able to gain access to your private keys and control the accounts associated with them.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("After you have secured your mnemonic (triple check!), you can delete bash history to ensure no one can retrieve it.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("history")]),e._v(" -c\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" ~/.bash_history\n")])])])]),e._v(" "),t("p",[e._v("You can generate more accounts from the same mnemonic using the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("yourKeyName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --recover --account "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),t("p",[e._v("This command will prompt you to input a passphrase as well as your mnemonic. Change the account number to generate a different account.")]),e._v(" "),t("p",[e._v("If you check your private keys, you'll now see "),t("code",[e._v("<account_name>")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("account_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("View the validator operator's address via:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("account_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --bech"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("val\n")])])]),t("p",[e._v("You can see all your available keys by typing:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys list\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("We strongly recommend "),t("strong",[e._v("NOT")]),e._v(" using the same passphrase for multiple keys.\nThe Terra team is not be responsible for the loss of funds.")])]),e._v(" "),t("h2",{attrs:{id:"generate-keys-ledger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-keys-ledger"}},[e._v("#")]),e._v(" Generate Keys (Ledger)")]),e._v(" "),t("p",[e._v("You can use the Ledger Nano S hardware wallet to store your Terra account private keys, which is considered a more secure option because the keys are kept off connected devices. The process for using a hardware wallet with "),t("code",[e._v("terracli")]),e._v(" is similar to creating a normal key, except a Ledger key delegate account information displaying and signing operations to a connected Ledger hardware device instead of a encrypted key stored on the machine.")]),e._v(" "),t("h3",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("ul",[t("li",[e._v("You have "),t("a",{attrs:{href:"https://support.ledgerwallet.com/hc/en-us/articles/360000613793",target:"_blank",rel:"noopener noreferrer"}},[e._v("initialized your Ledger Nano S"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("The latest firmware is "),t("a",{attrs:{href:"https://support.ledger.com/hc/en-us/articles/360002731113-Update-Ledger-Nano-S-firmware",target:"_blank",rel:"noopener noreferrer"}},[e._v("installed"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Ledger Live is "),t("a",{attrs:{href:"https://support.ledger.com/hc/en-us/articles/360006395233-Take-your-first-steps",target:"_blank",rel:"noopener noreferrer"}},[e._v("ready to use"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Google Chrome is installed.")])]),e._v(" "),t("h3",{attrs:{id:"install-terra-app-on-ledger-live"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-terra-app-on-ledger-live"}},[e._v("#")]),e._v(" Install Terra app on Ledger Live")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("To do this, it is preferable to use a brand new ledger device as there can be only one mnemonic per ledger device.")]),e._v(" "),t("p",[e._v("If, however, you want to use a ledger that is already initialized with a seed, you can reset it by going in "),t("code",[e._v("Settings")]),e._v(">"),t("code",[e._v("Device")]),e._v(">"),t("code",[e._v("Reset All")]),e._v(".")]),e._v(" "),t("p",[t("strong",[e._v("Please note that this will wipe out the seed currently stored on the device.")]),e._v(" > "),t("strong",[e._v("If you have not properly secured the associated mnemonic, you could lose your funds!")])])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("IMPORTANT")]),e._v(" "),t("p",[e._v("Only use Ledger devices that you bought factory new or trust fully.")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Open the "),t("strong",[e._v("Manager")]),e._v(" in Ledger Live.")])]),e._v(" "),t("li",[t("p",[e._v("Connect and unlock your Ledger Nano S.")])]),e._v(" "),t("li",[t("p",[e._v("If asked, allow the manager on your device by pressing the right button.")])]),e._v(" "),t("li",[t("p",[e._v("Find "),t("strong",[e._v("Terra")]),e._v(" in the app catalog.")])]),e._v(" "),t("li",[t("p",[e._v("Click the Install button of the app.")])]),e._v(" "),t("li",[t("p",[e._v("An installation window appears.")])]),e._v(" "),t("li",[t("p",[e._v("Your device will display "),t("strong",[e._v("Processing…")])])]),e._v(" "),t("li",[t("p",[e._v("The app installation is confirmed.")])])]),e._v(" "),t("h3",{attrs:{id:"create-a-ledger-key-on-terracli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-ledger-key-on-terracli"}},[e._v("#")]),e._v(" Create a Ledger Key on terracli")]),e._v(" "),t("p",[e._v("When you initialize your ledger, a 24-word mnemonic is generated and stored in the device. This mnemonic is compatible with Terra and Terra accounts can be derived from it. Therefore, all you have to do is make your ledger compatible with "),t("code",[e._v("terracli")]),e._v(".")]),e._v(" "),t("p",[e._v("The process is similar to the process with a computer; use the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("terracli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("yourAccountName"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --ledger\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),t("p",[e._v("This command will only work while the Ledger is plugged in and unlocked.")])]),e._v(" "),t("p",[e._v("This will create a key that will defer to the Ledger Hardware Wallet when being used to query account information or signing transaction. The key is not stored on the computer and is used only as a handler for the Ledger.")]),e._v(" "),t("h2",{attrs:{id:"recovering-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recovering-keys"}},[e._v("#")]),e._v(" Recovering Keys")]),e._v(" "),t("p",[e._v("If you have the mnemonic used to generate your private key, you can recover it and re-register your key. Issuing the following command will prompt you to enter your 24-word secret mnemonic phrase.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("terracli keys add <yourKeyName> --recover\n")])])]),t("h2",{attrs:{id:"generate-multisig-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-multisig-keys"}},[e._v("#")]),e._v(" Generate Multisig Keys")]),e._v(" "),t("p",[e._v("See "),t("a",{attrs:{href:"./multisig"}},[e._v("Multisig Transactions")]),e._v(" for how to create multisig accounts and sign transactions.")])])}),[],!1,null,null,null);a.default=r.exports}}]);