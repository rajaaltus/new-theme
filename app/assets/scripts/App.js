
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mm = new MobileMenu;
new RevealOnScroll($('.page-section__section-content'),'70%','reveal-slide');
new RevealOnScroll($('.featured-blog'),'70%','reveal-scale');
new RevealOnScroll($('.page-section-white__section-content'),'70%','reveal-slide');



