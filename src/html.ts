export class HTML {
	ChatHtml: string = `
    <!DOCTYPE html>
		<html>
		<head>
		  <meta name="viewport" content="width=device-width, initial-scale=1">
		  <style>
            @keyframes colorChange {
                from { background-color: #f35626; }
                to {background-color: #feab3a;}
            }
            .animated-box {
                animation: colorChange 1.5s infinite alternate;
            } 
            body{text-align: center;} 
			h1 { text-align: center; }
			form { width: 80%;  margin: 0 auto; }
			label {  display: block; text-align: center; }
			input[type="text"] {
			  width: 100%; padding: 10px; margin: 8px 0;
			  box-sizing: border-box;
			}
			input[type="submit"] {
			  width: 100%;
			  padding: 10px;
			  margin: 8px 0;
			  box-sizing: border-box; 
			}
			#response ,#imgresponse{
			  width: 80%;  margin: 0 auto; text-align:left;
			}
		  </style>
		</head>
		<body>
		  <h1>CHAT</h1>
		  <form action="" method="POST" id="question-form"> <!-- 添加 id 属性 -->
			<label for="question">Input a Question:</label>
			<input type="text" id="question" name="question" autocomplete="false">
			<input type="submit" value="Submit" id="submit-button"> <!-- 添加 id 属性 -->
		  </form>
		  <div id="response"></div>
          <img id="imgresponse"></img>
		  <script>
            function onLoadImage(data,bck){  
                fetch('', { method: 'POST', body: data })
                    .then(response => response.blob())
                    .then(blob => {
                    const url = window.URL.createObjectURL(blob);
                    
                    document.getElementById('imgresponse').src = url; 
                    /**
                     * const link = document.createElement('a');
                    link.href = url;
                    link.download = 'image.jpg';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    **/
                    bck()
                })
                .catch(error => {console.error(error),bck()});
            } 
			document.querySelector('#question-form').addEventListener('submit', async (e) => {
			  e.preventDefault();
			  const formData = new FormData(e.target);
			  const submitButton = document.getElementById('submit-button');  
              submitButton.classList.add("animated-box");
			  submitButton.disabled = true; 
              if (window.location.href.indexOf("img")>0)onLoadImage(formData,()=>{  submitButton.classList.remove("animated-box"); submitButton.style.backgroundColor = 'initial';submitButton.disabled = false;})
              else{
                const response = await fetch('', { method: 'POST', body: formData }); 
                const data = await response.text();
                document.getElementById('response').innerHTML = data; 
               // 恢复按钮状态 
                submitButton.classList.remove("animated-box")
                submitButton.disabled = false;
             }  
			});
		  </script>
		</body>
		</html>
    `;
}
