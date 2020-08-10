export default function addSerialNumber(source) {
  const target = {
    serialNumber: '12345',
    properties: {
      color: 'green',
      status: 'processed'
    }
  };
  return Object.assign({}, source, target);
}
