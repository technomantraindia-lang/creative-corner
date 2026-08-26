Get-ChildItem "services\*.html" | ForEach-Object {
  $c = Get-Content $_.FullName -Raw
  if ($c -notmatch 'inquiry-popup\.js') {
    $c = $c -replace '</body>', "  <script src=`"../inquiry-popup.js`"></script>`n</body>"
    Set-Content -Path $_.FullName -Value $c -NoNewline
    Write-Output ("updated: " + $_.Name)
  } else {
    Write-Output ("already has script: " + $_.Name)
  }
}