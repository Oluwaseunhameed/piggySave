
$.ajax({
  
    url: 'http://localhost:3000/users',
    method: 'get',
    
  }).done((e)=>{
        for (let i = 0; i < e.length; i++){
            $('#trans').append(
                `<tr>
                <td>${i + 1}
                </td>

                <td>${e[i].fullname}</td>
                <td>${e[i].bankName}</td>
                <td>${e[i].accountNo}</td>
                <td>${e[i].amtDeposited}</td>
                <td>${e[i].amtWithdrew}</td>
                <td>${e[i].balance}</td>
                <td>${e[i].date}</td>
                </tr>`
                 )
                }
            })
            $('#signup-form').on('submit', function(event){
                event.preventDefault();
                $.ajax({
                 url:"http://localhost:3000/users",
                 method:"post",
                 data:$(this).serialize(),
                 dataType:"json",
                 beforeSend:function(){
                  $('#signup').attr('disabled', 'disabled');
                 },
                success:function(data){
                    if(data.error){
                        if(data.register_username_error != ''){
                            $('#register_username_error').html(data.register_username_error);
                        } else {
                            $('#register_username_error').html('');
                        }
                        if(data.register_email_error != ''){
                            $('#register_email_error').html(data.register_email_error);
                        } else {
                            $('#register_email_error').html('');
                        }
                        if(data.register_phone_number != ''){
                            $('#register_phone_error').html(data.register_phone_error);
                        } else {
                            $('#register_phone_error').html('');
                        }
                        if(data.register_password != ''){
                            $('#register_password_error').html(data.register_password_error);
                        } else {
                            $('#register_password_error').html('');
                        }
                    }
                    if(data.success){
                        $('#success_message').html(data.success);
                        $('#register_username_error').html('');
                        $('#register_email_error').html('');
                        $('#register_phone_error').html('');
                        $('#register_password_error').html('');
                        $('#signup-form')[0].reset();
                    }
                    $('#signup').attr('disabled', false);
                }
            })
        });