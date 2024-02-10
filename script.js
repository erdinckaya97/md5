$('#frm').submit(function(e){
    e.preventDefault();
    let what = $('#what').val();
    let algorithm = $('#algorithm').val();
    if (what == '') {
        alert("Ooops! I don't see any text to encode!");
        return;
    }
    let hash;
    switch(algorithm) {
        case 'MD5':
            hash = CryptoJS.MD5(what).toString();
            break;
        case 'SHA1':
            hash = CryptoJS.SHA1(what).toString();
            break;
        case 'SHA256':
            hash = CryptoJS.SHA256(what).toString();
            break;
    }
    $('#hash').val(hash);
    $('#hash').focus();
    $('#hash').select();
});
