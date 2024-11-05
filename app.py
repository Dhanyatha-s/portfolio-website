from flask import Flask, render_template, url_for, request,jsonify, send_file
import requests



app = Flask(__name__)


# Your EmailJS credentials
EMAILJS_SERVICE_ID = 'service_315c41f'
EMAILJS_TEMPLATE_ID = 'template_kpu4zqf'
EMAILJS_USER_ID = 'MeJPU2wl9CMY-blgZ' 

@app.route('/')
def home():
    return render_template('index.html')

 # Your public key (User ID)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    message = data.get('message')

    if not message:
        return jsonify({"status": "error", "message": "Message content is missing"}), 400

    service_id = 'service_315c41f'
    template_id = 'template_kpu4zqf'
    user_id = 'MeJPU2wl9CMY-blgZ'
    private_key = 'HDIlNXigmJkci5Tu-yJQd'

    
    # API URL for EmailJS
    emailjs_url = "https://api.emailjs.com/api/v1.0/email/send"

    # Prepare the payload
    payload = {
        'service_id': service_id,
        'template_id': template_id,
        'user_id': user_id,
        'template_params': {
            'message': message
        },
        'accessToken': private_key  # 
    }

    # Send the POST request to EmailJS
    try:
        response = requests.post(emailjs_url, json=payload, headers={'Content-Type': 'application/json'})
        
        # Debugging info
        print(f"Response status code: {response.status_code}")
        print(f"Response content: {response.content.decode()}")

        if response.status_code == 200:
            return jsonify({"status": "success", "message": "Message sent successfully!"}), 200
        else:
            return jsonify({"status": "error", "message": "Failed to send message. Check server logs for details."}), 500
    except Exception as e:
        # Log the error
        print(f"An error occurred: {str(e)}")
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/resume')
def resume():
    # This renders an HTML template to view the PDF with a download button
    return render_template('resume.html')

@app.route('/download-resume')
def download_resume():
    # This will send the PDF file to be downloaded by the user
    return send_file('static/resume.pdf', as_attachment=True, download_name='resume.pdf')


if __name__ == '__main__':
    app.run(debug=True)
