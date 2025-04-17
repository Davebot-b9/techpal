import json
from pathlib import Path
from typing import Dict

HISTORY_FILE = Path("history.json")
HISTORY_FILE.write_text("{}") if not HISTORY_FILE.exists() else None

def load_history() -> Dict[str, list]:
    """Carga el historial desde el archivo JSON."""
    with open(HISTORY_FILE, "r", encoding="utf-8") as f:
        return json.load(f)

def save_history(history: Dict[str, list]):
    """Guarda el historial en el archivo JSON. """
    with open(HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2)