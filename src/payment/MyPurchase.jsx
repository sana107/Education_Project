import React, { useState } from 'react';
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Typography,
    Box,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
} from '@mui/material';

const MyPurchase = () => {
    const [paymentMethod, setPaymentMethod] = useState('card'); // Track selected payment method
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        upiId: '',
        agreeTerms: false,
    });

    // Dynamic fields configuration for both UPI and Card payment options
    const fieldsConfig = {
        common: [
            { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'John M. Doe' },
            { label: 'Email', name: 'email', type: 'email', placeholder: 'john@example.com' },
        ],
        card: [
            { label: 'Card Number', name: 'cardNumber', type: 'text', placeholder: '1111-2222-3333-4444' },
            { label: 'Expiration Date (MM/YY)', name: 'expDate', type: 'text', placeholder: '09/25' },
            { label: 'CVV', name: 'cvv', type: 'text', placeholder: '352' },
        ],
        upi: [
            { label: 'UPI ID', name: 'upiId', type: 'text', placeholder: 'yourupi@upi' },
        ],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleCheckboxChange = (e) => {
        const { checked } = e.target;
        setFormValues((prevValues) => ({ ...prevValues, agreeTerms: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formValues);
        // Add API call or payment processing logic here
    };

    return (
        <>
            <div className="container">
                <Box className='shadow' sx={{ padding: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Online Course Purchase
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Complete the form below to purchase the course and proceed to payment.
                    </Typography>

                    <Grid container spacing={2}>
                        {/* Left Column - Course Details and Billing Information */}
                        <Grid item xs={12} md={8}>
                            <Box sx={{ backgroundColor: '#f2f2f2', padding: 2, borderRadius: 1 }}>
                                <form onSubmit={handleSubmit}>
                                    <Typography variant="h6">Course Details</Typography>
                                    <Typography variant="body1">Course Name: Advanced React Development</Typography>
                                    <Typography variant="body1">Price: $150</Typography>
                                    <hr />

                                    <Typography variant="h6">Billing Information</Typography>
                                    {/* Dynamic Common Fields */}
                                    {fieldsConfig.common.map((field) => (
                                        <TextField
                                            key={field.name}
                                            fullWidth
                                            label={field.label}
                                            variant="outlined"
                                            margin="normal"
                                            name={field.name}
                                            value={formValues[field.name]}
                                            onChange={handleInputChange}
                                            placeholder={field.placeholder}
                                            required
                                        />
                                    ))}

                                    <hr />
                                    {/* Payment Method Selection */}
                                    <Typography variant="h6">Payment Method</Typography>
                                    <FormControl>
                                        <FormLabel>Choose Payment Method</FormLabel>
                                        <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
                                            <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
                                            <FormControlLabel value="upi" control={<Radio />} label="UPI (Unified Payments Interface)" />
                                        </RadioGroup>
                                    </FormControl>

                                    {/* Dynamic Payment Fields Based on Payment Method */}
                                    {paymentMethod === 'card' &&
                                        fieldsConfig.card.map((field) => (
                                            <TextField
                                                key={field.name}
                                                fullWidth
                                                label={field.label}
                                                variant="outlined"
                                                margin="normal"
                                                name={field.name}
                                                value={formValues[field.name]}
                                                onChange={handleInputChange}
                                                placeholder={field.placeholder}
                                                required
                                            />
                                        ))}

                                    {paymentMethod === 'upi' &&
                                        fieldsConfig.upi.map((field) => (
                                            <TextField
                                                key={field.name}
                                                fullWidth
                                                label={field.label}
                                                variant="outlined"
                                                margin="normal"
                                                name={field.name}
                                                value={formValues[field.name]}
                                                onChange={handleInputChange}
                                                placeholder={field.placeholder}
                                                required
                                            />
                                        ))}

                                    <FormControlLabel
                                        control={<Checkbox checked={formValues.agreeTerms} onChange={handleCheckboxChange} />}
                                        label="I agree to the Terms and Conditions"
                                    />
                                    <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }} type="submit" disabled={!formValues.agreeTerms}>
                                        Proceed to Payment
                                    </Button>
                                </form>
                            </Box>
                        </Grid>

                        {/* Right Column - Order Summary */}
                        <Grid item xs={12} md={4}>
                            <Box sx={{ backgroundColor: '#f2f2f2', padding: 2, borderRadius: 1 }}>
                                <Typography variant="h6">Order Summary</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                                    <Typography variant="body1">Course Name</Typography>
                                    <Typography variant="body1">Advanced React Development</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                                    <Typography variant="body1">Price</Typography>
                                    <Typography variant="body1">$150</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
                                    <Typography variant="body1">Tax</Typography>
                                    <Typography variant="body1">$10</Typography>
                                </Box>
                                <hr />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
                                    <Typography variant="body1"><b>Total</b></Typography>
                                    <Typography variant="body1"><b>$160</b></Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
};

export default MyPurchase;
