// 创建整个应用的路由器
import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Message from "@/pages/Message";
import News from "@/pages/News";
import Detail from "@/pages/Detail";
const router =  new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            beforeEnter:(to,from, next)=>{
                console.log('独享守卫触发！')
                next()
            }
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{
                        isAuth:true
                    }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{
                        isAuth:true
                    },
                    children:[
                        {
                            name:'detail',
                            path: 'detail',
                            component: Detail,
                            //方式1 对象形式 不常用 方式2 布尔值，若布尔为真，就会把路由组件的params参数传递给props属性
                            //方式3 函数式写法

                            //可以配合解构赋值
                            props({query:{id, title}}){
                                return {
                                    id:id,
                                    title:title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next)=>{
    console.log('前置路由守卫！')
    next()
})
router.afterEach((to, from)=>{
    console.log('后置路由守卫准备！')
})
export default router