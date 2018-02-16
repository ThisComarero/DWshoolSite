function check(form)
{
 
 if(form.userid.value == "subscribe" && form.pswrd.value == "dewclarke")
  {
    window.open('https://www.youtube.com/c/dewclarke?sub_confirmation=1')
  }
 else
 {
   alert("Błedny login lub hasło")
  }
}