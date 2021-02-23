
$(function(){
    const open=$('#open');
    const close=$('#close');
    const container=$('.container');

    open.on('click',function(){
        container.addClass('show-nav');
    });

    close.on('click',function(){
        container.removeClass('show-nav');
    });
});