exports.getDefinition = (req,res) =>{
  console.log(req.body);
  switch (req.body.definition_name_type) {
        case 'HTD':
        res.status(200).json({set_attributes: {
            haveDefinition: "true",
            definition_content: "Thì hiện tại đơn (Simple present tense) dùng để diễn tả một sự thật hiển nhiên hay một hành động diễn ra lặp đi lặp lại theo thói quen, phong tục, khả năng."
          }})
        break;
        case 'QKD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì quá khứ đơn (Past simple tense) dùng để diễn tả một hành động, sự việc diễn ra và kết thúc trong quá khứ."
              }})
        break;
        case 'QKHT':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì hiện tại đơn (Simple present tense) dùng để diễn tả một sự thật hiển nhiên hay một hành động diễn ra lặp đi lặp lại theo thói quen, phong tục, khả năng."
              }})  
        break;
        case 'HTTD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì hiện tại tiếp diễn dùng để diễn tả những sự việc xảy ra ngay lúc chúng ta nói hay xung quanh thời điểm chúng ta nói, và hành động đó vẫn chưa chấm dứt (còn tiếp tục diễn ra)."
              }})  
        break;
        case 'QKHT':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì quá khứ hoàn thành (Past perfect tense) dùng để diễn tả một hành động xảy ra trước một hành động khác trong quá khứ. Hành động nào xảy ra trước thì dùng thì quá khứ hoàn thành. Hành động xảy ra sau thì dùng thì quá khứ đơn."
              }})  
        break;
        case 'HTHT':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì hiện tại hoàn thành (Present perfect tense) dùng để diễn tả một hành động, sự việc đã bắt đầu từ trong quá khứ, kéo dài đến hiện tại và có thể tiếp tục tiếp diễn trong tương lai."
              }})  
        break;
        case 'TLTD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì tương lai tiếp diễn (Future continuous tense) dùng để diễn tả một hành động, sự việc sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai."
              }})  
        break;
        case 'điều kiện loại 2':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Câu điều kiện loại 2 là câu điều kiện trái với thực tế ở hiện tại.Ví dụ: Trong câu điều kiện loại II, động từ của mệnh đề điều kiện chia ở bang thái cách (past subjunctive), động từ của mệnh đề chính chia ở thì điều kiện hiện tại (simple conditional). Chú ý: Bàng thái cách (Past subjunctive) là hình thức chia động từ giống hệt như thì quá khư đơn, riêng động từ “to be” thì dùng “were” cho tất cả các ngôi."
              }})  
        break;
        case 'HTHTTD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì hiện tại hoàn thành tiếp diễn là thì diễn tả sự việc bắt đầu trong quá khứ và tiếp tục ở hiện tại có thể tiếp diễn ở tương lai sự việc đã kết thúc nhưng ảnh hưởng kết quả còn lưu lại hiện tại."
              }})  
        break;
        case 'TLD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì tương lai đơn trong tiếng Anh (Simple future tense) được dùng khi không có kế hoạch hay quyết định làm gì nào trước khi chúng ta nói. Chúng ta ra quyết định tự phát tại thời điểm nói."
              }})  
        break;
        case 'TLHT':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì tương lai hoàn thành – Future Perfect dùng để diễn tả một hành động hay sự việc hoàn thành trước một thời điểm trong tương lai."
              }}) 
        break;
        case 'TLHTTD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì tương lai hoàn thành tiếp diễn (Future perfect continuous tense) dùng để diễn tả một hành động, sự việc sẽ xảy ra và xảy ra liên tục trước một thời điểm nào đó trong tương lai."
              }})  
        break;
        case 'QKTD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì quá khứ tiếp diễn (Past continuous tense) dùng để diễn tả một hành động, sự việc đang diễn ra xung quanh một thời điểm trong quá khứ."
              }})  
        break;
        case 'QKHTTD':
            res.status(200).json({set_attributes: {
                haveDefinition: "true",
                definition_content: "Thì quá khứ hoàn thành tiếp diễn (Past perfect continuous tense) dùng để diễn tả một hành động, sự việc đã đang xảy ra trong quá khứ và kết thúc trước một hành động cũng xảy ra trong quá khứ."
              }})  
        break;
      default:
        res.status(200).json({set_attributes: {
              haveDefinition: "false"
        }})  
          break;
  }
}

exports.DontUnderstandDefinition =(req,res) =>{
  console.log(req.body); 
  res.status(200).json({set_attributes: {
    "status":"now"
  }});
}