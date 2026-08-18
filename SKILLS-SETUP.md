# Skills setup — instalar todas las skills en un repo nuevo

Deja este archivo en la raíz del repo (o solo copia el bloque de abajo) y, al abrir
una sesión de Claude Code sobre el repo, escribe este **prompt**:

> Instala todas las skills ejecutando el script de la sección
> "Install script" de `SKILLS-SETUP.md`. Cuando termine, haz commit de
> `.claude/skills/` y súbelo.

Eso deja las 27 skills bajo `.claude/skills/` del repo, disponibles en cualquier
sesión de Claude Code que se abra sobre él.

---

## Qué instala (27 skills)

| Fuente | Skills |
|---|---|
| `nextlevelbuilder/ui-ux-pro-max-skill` | ui-ux-pro-max |
| `anthropics/claude-code` | frontend-design |
| `vercel-labs/agent-skills` | web-design-guidelines |
| `emilkowalski/skills` | animate, animation-vocabulary, apple-design, ask-sonner, emil-design-eng, find-animation-opportunities, improve-animations, pick-ui-library, prototype, review-animations |
| `leonxlnx/taste-skill` | brandkit, brutalist-skill, gpt-tasteskill, image-to-code-skill, imagegen-frontend-mobile, imagegen-frontend-web, minimalist-skill, output-skill, redesign-skill, soft-skill, stitch-skill, taste-skill, taste-skill-v1 |
| `im5tu/claude` | flutter-animations |

> Nota: `ui-ux-pro-max` necesita **Python 3** para su búsqueda local. Las demás son
> solo documentación (Markdown), sin scripts.

---

## Install script

Ejecútalo desde la raíz del repo. Es idempotente (puedes correrlo de nuevo).

```bash
set -e
DEST="$(pwd)/.claude/skills"
mkdir -p "$DEST"
TMP="$(mktemp -d)"; cd "$TMP"

# 1) ui-ux-pro-max
git clone --depth 1 https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
cp -r ui-ux-pro-max-skill/.claude/skills/ui-ux-pro-max "$DEST"/

# 2) frontend-design (Anthropic)
git clone --depth 1 --filter=blob:none --sparse https://github.com/anthropics/claude-code.git
git -C claude-code sparse-checkout set plugins/frontend-design
cp -r claude-code/plugins/frontend-design/skills/frontend-design "$DEST"/

# 3) web-design-guidelines (Vercel Labs)
git clone --depth 1 --filter=blob:none --sparse https://github.com/vercel-labs/agent-skills.git
git -C agent-skills sparse-checkout set skills/web-design-guidelines
cp -r agent-skills/skills/web-design-guidelines "$DEST"/

# 4) Emil Kowalski (10 skills)
git clone --depth 1 https://github.com/emilkowalski/skills.git emil-skills
cp -r emil-skills/skills/* "$DEST"/

# 5) taste-skill (13 skills; se excluyen archivos sueltos y scripts del repo)
git clone --depth 1 https://github.com/leonxlnx/taste-skill.git
for d in taste-skill/skills/*/; do cp -r "$d" "$DEST"/; done

# 6) flutter-animations
git clone --depth 1 --filter=blob:none --sparse https://github.com/im5tu/claude.git im5tu-claude
git -C im5tu-claude sparse-checkout set skills/flutter-animations
cp -r im5tu-claude/skills/flutter-animations "$DEST"/

# limpiar artefactos de Python que no deben versionarse
find "$DEST" -type d -name '__pycache__' -exec rm -rf {} + 2>/dev/null || true

cd - >/dev/null
rm -rf "$TMP"
echo "Instaladas $(find "$DEST" -maxdepth 1 -mindepth 1 -type d | wc -l) skills en $DEST"
```

Después:

```bash
git add .claude/skills
git commit -m "Add Claude Code skills"
git push
```
