import http.server
import socketserver
import socket
import webbrowser
import os
import sys

PORT = 8080

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching during development and ensure proper PWA headers
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    # Change directory to the script's folder
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    local_ip = get_local_ip()
    local_url = f"http://localhost:{PORT}"
    network_url = f"http://{local_ip}:{PORT}"

    print("=" * 60)
    print("  🚗 APPLICATION VIDANGE AUTO & ENTRETIEN CONNECTEE 🚗")
    print("=" * 60)
    print(f"\n[+] Serveur local actif sur : {local_url}")
    print(f"[+] Pour ouvrir sur votre TELEPHONE (meme Wi-Fi) :")
    print(f"    --> {network_url} <--\n")
    print("=" * 60)
    print("Astuce : Sur votre telephone Android, ouvrez le lien dans Chrome,")
    print("puis cliquez sur les 3 points en haut > 'Ajouter a l'ecran d'accueil'")
    print("pour installer l'application definitivement !")
    print("=" * 60)
    print("\n(Appuyez sur Ctrl+C pour arreter le serveur)\n")

    # Ouvrir automatiquement le navigateur sur PC
    try:
        webbrowser.open(local_url)
    except Exception:
        pass

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServeur arrete avec succes.")
            sys.exit(0)
