//The generator's text
// The MB
// Both QRs
let ids = []

$('.generator').on('click', function() {
    let processorId = $(this).closest('div').attr('id')
    let computerId = $(this).closest('.computer').attr('data-id')
    ids.push({cmp_id: computerId})
    let BUSNumber = $(this).closest('.computer').find('.BUS').html()
    console.log(`Processor ID: ${processorId}\nComputer's Data-id: ${computerId}\nBUS number: ${BUSNumber}`)
})

$('.validator').on('click', function() {
    let genText = $(this).closest('.computer').find('.generator').html()
    let MB = $(this).closest('.computer').find('.MB').html()
    let qr1 = $(this).closest('.computer').find('.QR').html()
    let qr2 = $(this).closest('.computer').find('.QR:nth-child(2)').html()
    console.log(`Generator text: ${genText}\nthe MB is ${MB}\nQR1: ${qr1}\nQR2: ${qr2}`)
})