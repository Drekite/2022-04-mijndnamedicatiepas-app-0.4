/**
  * Share.js
  * Contributors: Lucas van Osenbruggen
  * Description: Contains functions related to sharing.
  */
import QRCode from 'react-native-qrcode-svg'

/**
 * Generates QR code from text.
 * @function GenerateQR
 * @param  {string} text  the text to convert into a QR code.
 * @return {QRCode}       a react component containing a QR code of the text.
 */
function GenerateQR (text) {
  if (typeof text !== 'string') { throw TypeError('Text should be a string') }
  if (text.length > 4269) { throw RangeError('Text should not exceed the maximum size for QR codes') }
  const QR = <QRCode value={text} /> // Create component that converts text into a QR code
  return QR
}

module.exports = { GenerateQR }
export default GenerateQR
