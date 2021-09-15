(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{405:function(t,a,e){"use strict";e.r(a);var s=e(5),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"interacting-with-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-contract"}},[t._v("#")]),t._v(" Interacting with the Contract")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("You can also follow these steps in the official desktop wallet for Terra, "),e("a",{attrs:{href:"https://station.terra.money",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terra Station"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("p",[t._v("Make sure you have set up "),e("strong",[t._v("LocalTerra")]),t._v(" and that it is up and running:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" localterra\ndocker-compose up\n")])])]),e("p",[t._v("You should also have the latest version of "),e("code",[t._v("terracli")]),t._v(" by building the latest version of Terra Core. We will configure it to use it against our isolated testnet environment.")]),t._v(" "),e("p",[t._v("In a separate terminal, make sure to set up the following mnemonic:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli keys "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" test1 --recover\n")])])]),e("p",[t._v("Using the mnemonic:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn\n")])])]),e("h2",{attrs:{id:"uploading-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uploading-code"}},[t._v("#")]),t._v(" Uploading Code")]),t._v(" "),e("p",[t._v("Make sure that the "),e("strong",[t._v("optimized build")]),t._v(" of "),e("code",[t._v("my_first_contract.wasm")]),t._v(" that you created in the last section is in your current working directory.")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli tx wasm store my_first_contract.wasm --from test1 --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --fees"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("100000uluna --broadcast-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),e("p",[t._v("You should see output similar to the following:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("height: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\ntxhash: 83BB9C6FDBA1D2291E068D5CF7DDF7E0BE459C6AF547EC82652C52507CED8A9F\ncodespace: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ncode: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ndata: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nrawlog: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"msg_index":0,"log":"","events":[{"type":"message","attributes":[{"key":"action","value":"store_code"},{"key":"module","value":"wasm"}]},{"type":"store_code","attributes":[{"key":"sender","value":"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"},{"key":"code_id","value":"1"}]}]}]\'')]),t._v("\nlogs:\n- msgindex: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  log: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  events:\n  - type: message\n    attributes:\n    - key: action\n      value: store_code\n    - key: module\n      value: wasm\n  - type: store_code\n    attributes:\n    - key: sender\n      value: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n    - key: code_id\n      value: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\ninfo: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ngaswanted: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("681907")]),t._v("\ngasused: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("680262")]),t._v("\ntx: null\ntimestamp: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),e("p",[t._v("As you can see, our contract was successfully instantiated with Code ID #1.")]),t._v(" "),e("p",[t._v("You can check it out:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli query wasm code "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ncodeid: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ncodehash: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KVR4SWuieLxuZaStlvFoUY9YXlcLLMTHYVpkubdjHEI")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\ncreator: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n")])])]),e("h2",{attrs:{id:"creating-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-contract"}},[t._v("#")]),t._v(" Creating the Contract")]),t._v(" "),e("p",[t._v("We have now uploaded the code for our contract, but we still don't have a contract. Let's create it, with the following InitMsg:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("We will compress the JSON into 1 line with "),e("a",{attrs:{href:"https://goonlinetools.com/json-minifier/",target:"_blank",rel:"noopener noreferrer"}},[t._v("this online tool"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli tx wasm instantiate "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"count\":0}'")]),t._v(" --from test1 --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --fees"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10000uluna --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --broadcast-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),e("p",[t._v("You should get a response like the following:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("height: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),t._v("\ntxhash: AEF6F2FA570029A5D4C0DA5ACFA4A2B614D5811E29EEE10FF59F821AFECCD399\ncodespace: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ncode: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\ndata: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\nrawlog: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'[{"msg_index":0,"log":"","events":[{"type":"instantiate_contract","attributes":[{"key":"owner","value":"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8"},{"key":"code_id","value":"1"},{"key":"contract_address","value":"terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5"}]},{"type":"message","attributes":[{"key":"action","value":"instantiate_contract"},{"key":"module","value":"wasm"}]}]}]\'')]),t._v("\nlogs:\n- msgindex: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  log: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n  events:\n  - type: instantiate_contract\n    attributes:\n    - key: owner\n      value: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n    - key: code_id\n      value: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("\n    - key: contract_address\n      value: terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\n  - type: message\n    attributes:\n    - key: action\n      value: instantiate_contract\n    - key: module\n      value: wasm\ninfo: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\ngaswanted: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120751")]),t._v("\ngasused: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("120170")]),t._v("\ntx: null\ntimestamp: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])])]),e("p",[t._v("From the output, we see that our contract was created above at: "),e("code",[t._v("terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5")]),t._v(". Take note of this contract address, as we will need it for the next section.")]),t._v(" "),e("p",[t._v("Check out your contract information:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli query wasm contract terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\naddress: terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\nowner: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\ncodeid: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\ninitmsg: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("eyJjb3VudCI6MH0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nmigratable: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),e("p",[t._v("By decoding the Base64 InitMsg:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"executing-the-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executing-the-contract"}},[t._v("#")]),t._v(" Executing the Contract")]),t._v(" "),e("p",[t._v("Let's do the following:")]),t._v(" "),e("ol",[e("li",[t._v("Reset count to 5")]),t._v(" "),e("li",[t._v("Increment twice")])]),t._v(" "),e("p",[t._v("If done properly, we should get a count of 7.")]),t._v(" "),e("h4",{attrs:{id:"reset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[t._v("#")]),t._v(" Reset")]),t._v(" "),e("p",[t._v("First, to burn:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reset"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli tx wasm execute terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"reset":{"count":5}}\'')]),t._v(" --from test1 --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --fees"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1000000uluna --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --broadcast-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),e("h4",{attrs:{id:"incrementing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#incrementing"}},[t._v("#")]),t._v(" Incrementing")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"increment"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli tx wasm execute terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"increment\":{}}'")]),t._v(" --from test1 --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("localterra --gas"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("auto --fees"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1000000uluna --broadcast-mode"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("block\n")])])]),e("h4",{attrs:{id:"querying-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#querying-count"}},[t._v("#")]),t._v(" Querying count")]),t._v(" "),e("p",[t._v("Let's check the result of our executions!")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"get_count"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("terracli query wasm contract-store terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{\"get_count\":{}}'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"count"')]),t._v(":7"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Excellent! Congratulations, you've created your first smart contract, and now know how to get developing with the Terra dApp Platform.")]),t._v(" "),e("h2",{attrs:{id:"what-s-next"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's Next?")]),t._v(" "),e("p",[t._v("We've only walked through a simple example of a smart contract, that modifies a simple balance within its internal state. Although this is enough to make a simple dApp, we can power more interesting applications by "),e("strong",[t._v("emitting messages")]),t._v(", which will enable us to interact with other contracts as well as the rest of the blockchain's module.")]),t._v(" "),e("p",[t._v("Check out a couple more examples of smart contracts on Terra at our "),e("a",{attrs:{href:"https://github.com/terra-money/cosmwasm-contracts",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),e("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=r.exports}}]);