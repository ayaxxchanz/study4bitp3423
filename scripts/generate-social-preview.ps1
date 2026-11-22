Add-Type -AssemblyName System.Drawing

$assetDir = Join-Path $PSScriptRoot '../assets'
[System.IO.Directory]::CreateDirectory($assetDir) | Out-Null
$bitmap = New-Object System.Drawing.Bitmap(1200, 630)
$canvas = [System.Drawing.Graphics]::FromImage($bitmap)
$canvas.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$canvas.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

function Brush($hex) {
  New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml($hex))
}
function Text($label, $size, $x, $y, $color = '#151617', $bold = $false) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $font = New-Object System.Drawing.Font('Arial', $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
  $brush = Brush $color
  $canvas.DrawString($label, $font, $brush, $x, $y)
  $font.Dispose()
  $brush.Dispose()
}
function Rect($x, $y, $width, $height, $fill, $outline = $true) {
  $brush = Brush $fill
  $canvas.FillRectangle($brush, $x, $y, $width, $height)
  $brush.Dispose()
  if ($outline) { $canvas.DrawRectangle($inkPen, $x, $y, $width, $height) }
}

$inkPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#151617'), 3)
$canvas.Clear([System.Drawing.ColorTranslator]::FromHtml('#F5F2F0'))
Rect 26 26 1148 578 '#151617' $false
Rect 18 18 1148 578 '#FFFDF9'

Rect 64 65 213 49 '#B09CFB'
Text 'BITP3423' 30 82 73 '#151617' $true
Text 'SPECIAL TOPIC IN' 27 65 141 '#52525B' $true
Text 'SOFTWARE ENGINEERING' 27 65 177 '#52525B' $true
Text 'Study4BITP3423' 70 58 248 '#151617' $true
Text 'Exam Study Hub' 40 65 337 '#151617' $true
Text 'Understand. Practise. Recall.' 28 65 407 '#52525B'

Rect 67 474 156 44 '#BBF7D0'
Text 'YOUR PACE' 19 84 486 '#151617' $true
Rect 238 474 184 44 '#FFBE98'
Text 'YOUR PROGRESS' 19 249 486 '#151617' $true

Rect 791 114 280 327 '#B09CFB'
Rect 761 140 280 327 '#BBF7D0'
Rect 730 166 280 327 '#151617' $false
Rect 722 158 280 327 '#FFFDF9'
$linePen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#DFDDD9'), 1)
for ($lineY = 214; $lineY -lt 475; $lineY += 35) {
  $canvas.DrawLine($linePen, 724, $lineY, 1000, $lineY)
}
$marginPen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#4ECB71'), 2)
$canvas.DrawLine($marginPen, 750, 160, 750, 483)
Text 'YOUR REVISION KIT' 16 771 183 '#52525B' $true
Text 'Summaries' 24 770 229 '#151617' $true
Text 'Mind maps' 24 770 264 '#151617' $true
Text 'Structured questions' 20 770 301 '#151617' $true
Text 'MCQ practice' 24 770 334 '#151617' $true
Text 'Flashcards' 24 770 369 '#151617' $true
Text 'Study at your own pace.' 16 770 439 '#52525B'
Text 'study4bitp3423.pages.dev' 18 65 552 '#52525B'

$bitmap.Save((Join-Path $assetDir 'social-preview.png'), [System.Drawing.Imaging.ImageFormat]::Png)
$marginPen.Dispose()
$linePen.Dispose()
$inkPen.Dispose()
$canvas.Dispose()
$bitmap.Dispose()
