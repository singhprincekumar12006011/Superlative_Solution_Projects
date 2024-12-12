// import Box from "@mui/material/Box";
// import Fab from "@mui/material/Fab";
// import Icon from "@mui/material/Icon";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import styled from "@mui/material/styles/styled";
// import { Breadcrumb, SimpleCard } from "app/components";

// // STYLED COMPONENTS
// const AppButtonRoot = styled("div")(({ theme }) => ({
//   margin: "30px",
//   "& .input": { display: "none" },
//   "& .button": { margin: theme.spacing(1) },
//   [theme.breakpoints.down("sm")]: { margin: "16px" },
//   "& .breadcrumb": {
//     marginBottom: "30px",
//     [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
//   }
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(1)
// }));

// export default function AppButton() {
//   return (
//     <AppButtonRoot>
//       <Box className="breadcrumb">
//         <Breadcrumb
//           routeSegments={[{ name: "Material", path: "/material" }, { name: "Buttons" }]}
//         />
//       </Box>

//       <SimpleCard title="contained buttons">
//         <StyledButton variant="contained" color="inherit">
//           Default
//         </StyledButton>

//         <StyledButton variant="contained" color="primary">
//           Primary
//         </StyledButton>

//         <StyledButton variant="contained" color="secondary">
//           Secondary
//         </StyledButton>

//         <StyledButton variant="contained" color="secondary" disabled>
//           Disabled
//         </StyledButton>

//         <StyledButton variant="contained" href="#contained-buttons">
//           Link
//         </StyledButton>

//         <input accept="image/*" className="input" id="contained-button-file" multiple type="file" />
//         <label htmlFor="contained-button-file">
//           <StyledButton variant="contained" component="span">
//             Upload
//           </StyledButton>
//         </label>
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="text buttons">
//         <StyledButton>Default</StyledButton>
//         <StyledButton color="primary">Primary</StyledButton>
//         <StyledButton color="secondary">Secondary</StyledButton>
//         <StyledButton disabled>Disabled</StyledButton>
//         <StyledButton href="#text-buttons">Link</StyledButton>

//         <input accept="image/*" className="input" id="text-button-file" multiple type="file" />
//         <label htmlFor="text-button-file">
//           <StyledButton component="span">Upload</StyledButton>
//         </label>
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="outlined buttons">
//         <StyledButton variant="outlined">Default</StyledButton>
//         <StyledButton variant="outlined" color="primary">
//           Primary
//         </StyledButton>

//         <StyledButton variant="outlined" color="secondary">
//           Secondary
//         </StyledButton>

//         <StyledButton variant="outlined" disabled>
//           Disabled
//         </StyledButton>

//         <StyledButton variant="outlined" href="#outlined-buttons">
//           Link
//         </StyledButton>

//         <input accept="image/*" className="input" id="outlined-button-file" multiple type="file" />
//         <label htmlFor="outlined-button-file">
//           <StyledButton variant="outlined" component="span">
//             Upload
//           </StyledButton>
//         </label>

//         <StyledButton variant="outlined" color="inherit">
//           Inherit
//         </StyledButton>
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="icon buttons">
//         <IconButton className="button" aria-label="Delete">
//           <Icon>delete</Icon>
//         </IconButton>

//         <IconButton className="button" aria-label="Delete" disabled color="primary">
//           <Icon>delete</Icon>
//         </IconButton>

//         <IconButton color="secondary" className="button" aria-label="Add an alarm">
//           <Icon>alarm</Icon>
//         </IconButton>

//         <IconButton color="primary" className="button" aria-label="Add to shopping cart">
//           <Icon>add_shopping_cart</Icon>
//         </IconButton>

//         <input accept="image/*" className="input" id="icon-button-file" type="file" />
//         <label htmlFor="icon-button-file">
//           <IconButton
//             color="primary"
//             component="span"
//             className="button"
//             aria-label="Upload picture">
//             <Icon>photo_camera</Icon>
//           </IconButton>
//         </label>
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="different size buttons">
//         <Fab size="small" color="secondary" aria-label="Add" className="button">
//           <Icon>add</Icon>
//         </Fab>

//         <Fab size="medium" color="secondary" aria-label="Add" className="button">
//           <Icon>add</Icon>
//         </Fab>

//         <Fab color="secondary" aria-label="Add" className="button">
//           <Icon>add</Icon>
//         </Fab>
//       </SimpleCard>

//       <Box py="12px" />

//       <SimpleCard title="outlined buttons">
//         <Fab color="primary" aria-label="Add" className="button">
//           <Icon>add</Icon>
//         </Fab>

//         <Fab color="secondary" aria-label="Edit" className="button">
//           <Icon>edit_icon</Icon>
//         </Fab>

//         <Fab variant="extended" aria-label="Delete" className="button">
//           <Icon sx={{ mr: 4 }}>navigation</Icon>
//           Extended
//         </Fab>

//         <Fab disabled aria-label="Delete" className="button">
//           <Icon>delete</Icon>
//         </Fab>
//       </SimpleCard>
//     </AppButtonRoot>
//   );
// }


 
import './AppButtonRoot.css'
import { useState } from 'react'; 
import Button from '@mui/material/Button';
import styled from '@mui/material/styles/styled';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

// STYLED COMPONENTS
const AppButtonRoot = styled('div')(({ theme }) => ({
  margin: '30px',
  '& .input': { display: 'none' },
  '& .button': { margin: theme.spacing(1) },
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  transition: 'all 0.3s ease-in-out',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export default function AppButton() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState('');

  const inventoryItems = [
    { id: 1, name: 'POLYSTER ROLLER BLIND FC SERIES', hsn: '63039200', price: 190 },
    { id: 2, name: 'Honey Comb Fabrics', hsn: '63039990', price: 68 },
    { id: 3, name: 'Viento VIBRANT-Cover / Cards / Catalogue', hsn: '48191010', price: 1500 },
  ];

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    const [id, quantity] = value.split('-');

    const updatedItems = [...selectedItems];
    const itemIndex = updatedItems.findIndex(item => item.id === parseInt(id));

    if (itemIndex > -1) {
      updatedItems[itemIndex].quantity = parseInt(quantity);
    } else {
      const item = inventoryItems.find(item => item.id === parseInt(id));
      updatedItems.push({ ...item, quantity: parseInt(quantity) });
    }

    setSelectedItems(updatedItems);
  };

  const handleNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const calculateTotal = () => {
    return selectedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const generatePDFInvoice = () => {
    const doc = new jsPDF();
    doc.setFontSize(10);

    // Header
    doc.text('Tax Invoice', 105, 10, { align: 'center' });
    doc.text(`Customer: ${customerName}`, 10, 20);
    doc.text(`Invoice No: 706`, 10, 30);
    doc.text(`Date: 9-Dec-24`, 10, 40);

    // Seller Information
    doc.text('Seller: ARTEX OVERSEAS', 10, 50);
    doc.text('Unit No.30, Sona Udhyoug Compound, Parsi Panchyat Road, Andheri-[E], Mumbai-400069 [Maha.]', 10, 60);
    doc.text('GSTIN: 27AFCPJ9861P1ZO', 10, 70);

    // Buyer Information
    doc.text('Buyer: Vishal Sales Corporation', 10, 80);
    doc.text('E-561-Opp Delhi Bazar, Ramphal Chowk Sec-7, Dwarka N D-75, New Delhi-110007.', 10, 90);
    doc.text('GSTIN: 07AERPG4404R1ZZ', 10, 100);

    // Items Table
    let startY = 110;
    doc.text('Description', 10, startY);
    doc.text('HSN/SAC', 70, startY);
    doc.text('Quantity', 100, startY);
    doc.text('Rate', 120, startY);
    doc.text('Amount', 140, startY);
    startY += 10;

    selectedItems.forEach((item, index) => {
      const amount = item.quantity * item.price;
      doc.text(item.name, 10, startY + index * 10);
      doc.text(item.hsn, 70, startY + index * 10);
      doc.text(item.quantity.toString(), 100, startY + index * 10);
      doc.text(item.price.toString(), 120, startY + index * 10);
      doc.text(amount.toString(), 140, startY + index * 10);
    });

    // Total
    const total = calculateTotal();
    startY += selectedItems.length * 10 + 10;
    doc.text(`Total: ${total}`, 140, startY);

    // Remarks
    doc.text('Remarks:', 10, startY + 10);
    doc.text('This is a computer-generated invoice.', 10, startY + 20);

    // Save PDF
    doc.save('invoice.pdf');
  };

  const generateExcelInvoice = () => {
    const ws = XLSX.utils.json_to_sheet([
      { 'Customer Name': customerName },
      ...selectedItems.map(item => ({
        'Item Name': item.name,
        HSN: item.hsn,
        Quantity: item.quantity,
        Rate: item.price,
        Amount: item.price * item.quantity,
      })),
      { Total: `Total: ${calculateTotal()}` },
    ]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Invoice');
    XLSX.writeFile(wb, 'invoice.xlsx');
  };

  return (
    <AppButtonRoot>
      <h1>Generate Invoice</h1>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={handle