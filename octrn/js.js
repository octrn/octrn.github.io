$('.page-scroll').on('click', function(e) {
    // ambil isi href
    let tujuan = $(this).attr('href');
    // tangkap elemen yg bersangkutan
    let elemenTujuan = $(tujuan);
    
    // pindahkan scroll
    // $('html, body').scrollTop(elemenTujuan.offset().top);
    $('html, body').animate({
      scrollTop: elemenTujuan.offset().top - 50
    }, 500);

    e.preventDefault();
});