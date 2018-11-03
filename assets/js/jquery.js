// Gets current year and displays it via the year id.
$('#year').text(new Date().getFullYear());

// Edit text once the more/less button is clicked.
$('.more').click(function() {
    var $this = $(this);
    
    var $parent = $this.parent();
    
    var $sibling = $parent.siblings('.collapse');
    
    if ($sibling.hasClass('show')) {
        $this.text('More');
    }
    
    else {
        $this.text('Less');
    }
});

// Icon controller once the more/less button is clicked.
$('.title').click(function (){
   var $this = $(this);
   
   var $child = $this.children('.decor-none');
   
   var $span = $child.children('.fas');
   
   var $parent = $this.parents('.card-header');
   
   var $sibling = $parent.siblings('.collapse');
   
   if($sibling.hasClass('show')) {
       $span.removeClass('fa-arrow-circle-up').addClass('fa-arrow-circle-down');
   }
   
   else {
       $span.removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-up');
   }
});


