import os
import subprocess

microservices = {
    'usermanagement': 8002,
    'flightreservation': 8003,
    # 'gestion_chambres': 8004,
    # 'paiement_facturation': 8005,
}

def start_django_service(name, port):
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', f'{name}.settings')
    subprocess.Popen(
        ["python", "manage.py", "runserver", f"{port}"],
        cwd=f"./{name}",  # Chemin vers le dossier du microservice
        env=os.environ
    )

for name, port in microservices.items():
    print(f"Démarrage de {name} sur le port {port}")
    start_django_service(name, port)

print("Tous les microservices sont démarrés...")
