String.prototype.gunAyYil = function() {
    var d= new Date(this); 
    //gun ay yıl
    return `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()} `
  };
  
Date.prototype.monthDays= function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}
