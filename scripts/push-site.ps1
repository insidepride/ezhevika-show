$ErrorActionPreference = "Stop"
$secureToken = Read-Host "Source credential" -AsSecureString
$tokenPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secureToken)
$token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($tokenPointer)
if ([string]::IsNullOrWhiteSpace($token)) { throw "Missing source credential" }
$env:GIT_CONFIG_COUNT = "1"
$env:GIT_CONFIG_KEY_0 = "http.extraHeader"
$env:GIT_CONFIG_VALUE_0 = "Authorization: Bearer $token"
try {
  & git push --set-upstream origin HEAD:main
  exit $LASTEXITCODE
}
finally {
  Remove-Item Env:GIT_CONFIG_COUNT -ErrorAction SilentlyContinue
  Remove-Item Env:GIT_CONFIG_KEY_0 -ErrorAction SilentlyContinue
  Remove-Item Env:GIT_CONFIG_VALUE_0 -ErrorAction SilentlyContinue
  if ($tokenPointer -ne [IntPtr]::Zero) {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($tokenPointer)
  }
  $secureToken = $null
  $token = $null
}
