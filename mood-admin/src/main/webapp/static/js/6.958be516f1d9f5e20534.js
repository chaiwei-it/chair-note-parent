webpackJsonp([6],{BbUS:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,'\n.goodsAdd[data-v-6ae0355c] {\n    /*width: 500px;*/\n    /*margin: 50px auto;*/\n}\n.className[data-v-6ae0355c] {\n    margin: 30px 0px;\n    padding: 0 50px;\n    height: 50px;\n    background-color: #d9ebf8;\n}\n.className div[data-v-6ae0355c]{\n    line-height: 50px;\n    color: #0c65d2;\n    font-size: 18px;\n}\n.form-left[data-v-6ae0355c]{\n    width: 45%;\n}\n.el-form-item .el-form-item[data-v-6ae0355c]{\n    width: 100%;\n}\n.el-form-item[data-v-6ae0355c] {\n    width: 45%;\n}\n.el-form-item__content .el-input .el-input__inner[data-v-6ae0355c] {\n    width: 400px;\n}\n.cell .el-input .el-input__inner[data-v-6ae0355c] {\n    width: 100%;\n}\n.avatar-uploader .el-upload[data-v-6ae0355c] {\n    border: 1px dashed #d9d9d9;\n    border-radius: 6px;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n}\n.avatar-uploader .el-upload[data-v-6ae0355c]:hover {\n    border-color: #409EFF;\n}\n.avatar-uploader-icon[data-v-6ae0355c] {\n    font-size: 28px;\n    color: #8c939d;\n    width: 100px;\n    height: 100px;\n    line-height: 100px;\n    text-align: center;\n}\n.thumbnailImage[data-v-6ae0355c] {\n    width: 100px;\n    height: 100px;\n    display: block;\n}\n.oblongImage[data-v-6ae0355c] {\n    width: 250px;\n    height: 100px;\n    display: block;\n}\n.exhibitionImage[data-v-6ae0355c] {\n    width: 250px;\n    height: 100px;\n    display: block;\n}\n\n  /*  .detailImage {\n    width: 750px;\n    height: 300px;\n    display: block;\n  }*/\ninput[data-v-6ae0355c]::-webkit-outer-spin-button,\n  input[data-v-6ae0355c]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\ninput[type="number"][data-v-6ae0355c] {\n    -moz-appearance: textfield;\n}\n',""])},JWt8:function(e,t,a){var n=a("BbUS");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("71f97923",n,!0)},WSG1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("EFWR"),s=n.a.ajax,i=n.a.api,l={data:function(){return{id:"",form:{shippingCode:""},details:{address:{}}}},mounted:function(){this.id=this.$route.query.id,this.getDetails()},methods:{getDetails:function(){var e=this;s(i.orderSelect,"POST",{id:this.id},function(t){e.details=t})},cancel:function(){window.history.go(-1)}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"details"},[a("el-form",{ref:"details",staticStyle:{"margin-top":"20px"},attrs:{model:e.details,"label-width":"120px",inline:!0}},[a("div",{staticClass:"className"},[a("div",[e._v("基本信息")])]),e._v(" "),a("el-form-item",{attrs:{label:"订单编号",prop:"orderSn"}},[a("span",[e._v(e._s(e.details.orderSn))])]),e._v(" "),a("el-form-item",{attrs:{label:"订单状态",prop:"orderStatus"}},[10==e.details.orderStatus?a("span",[e._v("待支付")]):e._e(),e._v(" "),20==e.details.orderStatus?a("span",[e._v("待发货")]):e._e(),e._v(" "),30==e.details.orderStatus?a("span",[e._v("待发货")]):e._e(),e._v(" "),40==e.details.orderStatus?a("span",[e._v("已确认")]):e._e(),e._v(" "),100==e.details.orderStatus?a("span",[e._v("已取消")]):e._e()]),e._v(" "),a("el-form-item",{attrs:{label:"商品金额",prop:"orderStatus"}},[a("span",[e._v(e._s(e.details.goodsPrice)+"元")])]),e._v(" "),a("el-form-item",{attrs:{label:"支付金额",prop:"orderStatus"}},[a("span",[e._v(e._s(e.details.payPrice)+"元")])]),e._v(" "),a("el-form-item",{attrs:{label:"优惠金额",prop:"orderStatus"}},[a("span",[e._v(e._s(e.details.discount)+"元")])]),e._v(" "),a("el-form-item",{attrs:{label:"邮费",prop:"orderStatus"}},[a("span",[e._v(e._s(e.details.shippingPrice)+"元")])]),e._v(" "),a("div",{staticClass:"className"},[a("div",[e._v("买家信息")])]),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"buyerName"}},[a("span",[e._v(e._s(e.details.buyerName))])]),e._v(" "),a("el-form-item",{attrs:{label:"手机号",prop:"buyerMobile"}},[a("span",[e._v(e._s(e.details.buyerMobile))])]),e._v(" "),a("div",{staticClass:"className"},[a("div",[e._v("商品信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.details.goodsList,border:""}},[a("el-table-column",{attrs:{prop:"goodsImage",label:"缩略图",width:"120",sortable:""},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.goodsImage,width:"100",height:"100"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"名称",width:"200",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsNum",label:"数量",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsPrice",label:"单价",width:"100",sortable:""}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsPrice",label:"总价",width:"100",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.goodsPrice*t.row.goodsNum))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"specInfo",label:"规格",width:"200",sortable:""}})],1),e._v(" "),a("div",{staticClass:"className"},[a("div",[e._v("收货信息")])]),e._v(" "),a("el-form-item",{attrs:{label:"收货人",prop:"buyerName"}},[a("span",[e._v(e._s(e.details.address.username))])]),e._v(" "),a("el-form-item",{attrs:{label:"收货人手机号",prop:"buyerMobile"}},[a("span",[e._v(e._s(e.details.address.mobile))])]),e._v(" "),a("el-form-item",{attrs:{label:"收货地址",prop:"orderStatus"}},[a("span",[e._v(e._s(e.details.address.address))])]),e._v(" "),a("div",{staticClass:"className"},[a("div",[e._v("发货信息")])]),e._v(" "),a("el-form-item",{attrs:{label:"快递单号",prop:"shippingCode"}},[a("span",[e._v(e._s(e.details.shippingCode))])]),e._v(" "),a("div",{staticStyle:{width:"100%",height:"80px"}}),e._v(" "),a("el-form-item",{attrs:{label:""}}),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.cancel}},[e._v("返回")])],1),e._v(" "),a("div",{staticStyle:{width:"100%",height:"80px"}})],1)],1)},staticRenderFns:[]};var o=a("vSla")(l,r,!1,function(e){a("JWt8")},"data-v-6ae0355c",null);t.default=o.exports}});