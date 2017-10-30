import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	//constructor Class
	constructor(els, offset, animationClass) {
		this.itemsToReveal = els;
		this.offsetValue = offset;
		this.animationClass = animationClass;
		this.hideInitially();
		this.createWaypoints();
	}
	//Methods
	hideInitially() {
		this.itemsToReveal.addClass(this.animationClass);
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass(that.animationClass+'--is-visible');
				},
				offset: that.offsetValue
			});
		});
	}

}

export default RevealOnScroll;
