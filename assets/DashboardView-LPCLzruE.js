import{_ as r,h as n,i as c,o as i,r as h}from"./index-PZxk90S3.js";const u={data(){return{status:!1}},created(){const e=document.cookie.replace(/(?:(?:^|.*;\s*)selectWaveToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.$http.get("https://select-wave-backend.onrender.com/api/auth/check",{headers:{Authorization:e}}).then(t=>{t.data.status?this.status=!0:(this.status=!1,this.$swal({title:"登入失敗，請重新登入"}),this.$router.push("/login"))}).catch(t=>{this.$router.push("/login"),this.$swal({title:`${t.response.data.message}`})})}};function p(e,s,t,l,o,d){const a=h("router-view");return o.status?(i(),n(a,{key:0})):c("",!0)}const m=r(u,[["render",p]]);export{m as default};
