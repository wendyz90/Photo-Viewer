function Utility (utilityName, utilityDescription) {
	
	this.utilityName = utilityName;
	this.utilityDescription = utilityDescription;
	
	this.getUtilityName = function() {
		return utilityName;
	}
	
	this.getUtilityDescription = function() {
		return utilityDescription;
	}
}


Utility.prototype = {
	
	constructor : Utility,
	info: function() {                 
	document.write("utilityName: " + this.utilityName());                 
	document.write(", utilityDescription: " + this.utilityDescription() + "<br>");             
	}
}