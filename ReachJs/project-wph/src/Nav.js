/**
 * Created by dllo on 17/8/17.
 */
import React,{Component} from 'react';

class Nav extends Component{
    render(){
        return(
            <nav>
                <div className="container">
                    <ul>
                        <li className="address"><a href="#" </div>="city">安徽</a>
                            <div className="addressMore">
                                <div>请选择所在的收货地区</div>
                                <ul>
                                    <li>
                                        <span>A</span>
                                        <a href="#" className="theCity">安徽</a>
                                        <a href="#" className="theCity">澳门</a>
                                    </li>
                                    <li>
                                        <span>B</span>
                                        <a href="#" className="theCity">北京</a>
                                    </li>
                                    <li>
                                        <span>C</span>
                                        <a href="#" className="theCity">重庆</a>
                                    </li>
                                    <li>
                                        <span>F</span>
                                        <a href="#" className="theCity">福建</a>
                                    </li>
                                    <li>
                                        <span>G</span>
                                        <a href="#" className="theCity">广东</a>
                                        <a href="#" className="theCity">广西</a>
                                        <a href="#" className="theCity">贵州</a>
                                        <a href="#" className="theCity">甘肃</a>
                                    </li>
                                    <li>
                                        <span>H</span>
                                        <a href="#" className="theCity" >河北</a>
                                        <a href="#" className="theCity">河南</a>
                                        <a href="#" className="theCity">黑龙江</a>
                                        <a href="#" className="theCity">海南</a>
                                        <a href="#" className="theCity">湖北</a>
                                        <a href="#" className="theCity">湖南</a>
                                    </li>
                                    <li>
                                        <span>J</span>
                                        <a href="#" className="theCity">江苏</a>
                                        <a href="#" className="theCity">吉林</a>
                                        <a href="#" className="theCity">江西</a>
                                    </li>
                                    <li>
                                        <span>L</span>
                                        <a href="#" className="theCity">辽宁</a>
                                    </li>
                                    <li>
                                        <span>N</span>
                                        <a href="#" className="theCity">内蒙古</a>
                                        <a href="#" className="theCity">宁夏</a>
                                    </li>
                                    <li>
                                        <span>Q</span>
                                        <a href="#" className="theCity">清海</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className="pleaseLogin"><a href="#">请登录</a>/
                            <div className="login clearFloat">
                                <div className="clearFloat loginImg">
                                    <img src="img/nav/pig.png" alt="" class="left">
                                        <a href="" className="helloLogin left">您好！[请登录]</a>
                                </div>
                                <div className="left loginWord">
                                    <a href="">我的收藏</a>
                                    <a href="">零钱</a>
                                    <a href="">我的唯品币</a>
                                </div>
                                <div className="left loginWord">
                                    <a href="">我的订单</a>
                                    <a href="">我的优惠券</a>
                                    <a href="">唯品金融</a>
                                </div>

                            </div>
                        </li>
                        <li><a href="#">注册</a>/</li>
                        <li><a href="#">签到有礼</a>/</li>
                        <li><a href="#">我的订单</a>/</li>
                        <li> <a href="#">我的特卖</a>/</li>
                        <li> <a href="#">会员俱乐部</a>/</li>
                        <li><a href="#">客户服务</a>/</li>
                        <li><a href="#">手机版</a>/</li>
                        <li className="more"><a href="#">更多</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}