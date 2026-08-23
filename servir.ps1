# Levanta el simulador en http://localhost:8081
# Busca Python, PHP o Node — el primero que encuentre.
#
# No se abre con doble clic: los navegadores tratan cada archivo file:// como un
# origen distinto y varias cosas dejan de comportarse como en producción.

$puerto = 8081
Set-Location $PSScriptRoot

function Hay($cmd) { $null -ne (Get-Command $cmd -ErrorAction SilentlyContinue) }

if (Hay 'python') {
  Write-Host "Sirviendo con Python en http://localhost:$puerto"
  python -m http.server $puerto
} elseif (Hay 'php') {
  Write-Host "Sirviendo con PHP en http://localhost:$puerto"
  php -S "localhost:$puerto"
} elseif (Hay 'npx') {
  Write-Host "Sirviendo con Node en http://localhost:$puerto"
  npx --yes serve -l $puerto .
} else {
  Write-Host "No encontre Python, PHP ni Node. Instala uno de los tres."
  exit 1
}
