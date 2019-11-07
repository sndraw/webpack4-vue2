/**
 * Created by sn on 2019/11/7.
 */
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/login',name:'login',
            component:resolve=>{
                require.ensure([],()=>{
                    resolve(require('./../pages/Login.vue'))
                },'Login')
            }
        },
        {
            path:'/example',name:'example',
            component:resolve=>{
                require.ensure([],()=>{
                    resolve(require('./../pages/Example.vue'))
                },'Example')
            }
        }
    ]
})


export  default router