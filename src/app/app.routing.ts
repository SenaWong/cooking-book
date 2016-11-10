import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RollexComponent} from './rollex/rollex.component';
import { LuckyPalaceComponent} from './lucky-palace/lucky-palace.component';
import { Scr888Component } from './scr888/scr888.component';
import { Play8oyComponent } from './play8oy/play8oy.component';
import { BankingComponent } from './banking/banking.component';
import { DownloadComponent } from './download/download.component';
import { SunCityComponent } from './sun-city/sun-city.component';
import { Win8Component } from './3win8/3win8.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const appRoutes: Routes = [
    {
   		path: '',
   		component: HomeComponent
    },
    {
   		path: 'rollex',
   		component: RollexComponent
    },
    {
		path: 'lpe88',
		component: LuckyPalaceComponent
    },
	{
		path: 'scr888',
		component: Scr888Component
	},
	{
		path: 'play8oy',
		component: Play8oyComponent
	},
	{
		path: 'banking',
		component: BankingComponent
	},
	{
		path: 'download',
		component: DownloadComponent
	},
	{
		path: 'suncity',
		component: SunCityComponent
	},
	{
		path: '3win8',
		component: Win8Component
	},
	{
		path: 'contactus',
		component: ContactUsComponent
	}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);