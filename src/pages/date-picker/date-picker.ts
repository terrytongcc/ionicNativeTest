import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DatePicker } from '@ionic-native/date-picker';
/**
 * Generated class for the DatePickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-date-picker',
  templateUrl: 'date-picker.html',
})
export class DatePickerPage {

	private selectedDate;
	private selectedTime;

  constructor(private datePicker: DatePicker, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatePickerPage');
  }

  selectDate() {
	  this.datePicker.show({
			date: new Date(),
			mode: 'date',
			androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK,
			titleText: 'Please select your date',
			okText: 'Select Date',
			cancelText: 'Cancel..',
			todayText: 'Today'
		}).then(
		  date => {
		  	console.log('Got date: ', date);
		  	this.selectedDate = date;
		 	},
		  err => console.log('Error occurred while getting date: ', err)
		);
  }

  selectTime() {
	  this.datePicker.show({
			date: new Date(),
			mode: 'time',
			androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK,
			titleText: 'Please select your time',
			okText: 'Select Time',
			cancelText: 'Cancel..',
			nowText: 'Now',
			is24Hour: true
		}).then(
		  time => {
		  	console.log('Got time: ', time);
		  	this.selectedTime = time;
		 	},
		  err => console.log('Error occurred while getting date: ', err)
		);
  }

}
