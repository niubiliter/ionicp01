import { Component } from '@angular/core';
import { Register  } from '../about/register';
import { NavController,Loading,LoadingController ,ModalController,AlertController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public user={
		username:'',
		password:''
	}
  constructor(public alertCtrl:AlertController,private navCtrl: NavController,private loadingCtrl: LoadingController,public modalCtrl: ModalController) {
    this.navCtrl=navCtrl;
    this.loadingCtrl=loadingCtrl;
  	this.modalCtrl=modalCtrl;
    this.alertCtrl=alertCtrl;
  }
login(){
  console.log('用户名-------------'+this.user.username);
  console.log('密码---------------'+this.user.password);
  if(this.user.username==''){
  if(this.user.username==''){
      let alert=this.alertCtrl.create({
        title:'验证信息',
        subTitle:'用户名不能为空',
        buttons:['ok']
      });
      alert.present();
  }else if(this.user.password=='')
  {
     let alert=this.alertCtrl.create({
        title:'验证信息',
        subTitle:'密码不能为空',
        buttons:['ok']
      });
      alert.present();
  }else{
    //做登陆操作
    console.log(this.user.username+'登陆');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
 
    loading.present();
 /*模拟登陆2秒*/
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }
	
}

}

}
