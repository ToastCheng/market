import React, { useState } from 'react';
import {
  Typography, Divider, Container, InputLabel, styled, Select, FormControl, Stack, Input, Radio, FormControlLabel, RadioGroup, MenuItem, TextField, Grid,
} from '@mui/material';

const StyledForm = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  width: 200,
}));

function Listing({
  id, handleInputChange, formValues, categories,
}) {
  return (
    <>

      <Container justifyContent="center">

        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography>
              Item
              {id}
            </Typography>

          </Grid>
          <Grid item xs={1}>
            <Typography>Title: </Typography>

          </Grid>
          <Grid item xs={3}>
            <TextField
              id="name-input"
              name="title"
              label="Required *"
              type="text"
              value={formValues.title}
              onChange={handleInputChange}
            />

          </Grid>
          <Grid item xs={1}>
            <Typography>Price: </Typography>

          </Grid>
          <Grid item xs={3}>
            <TextField
              id="price-input"
              name="price"
              label="Required *"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              value={formValues.price}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography>Category: </Typography>

          </Grid>
          <Grid item xs={1}>
            <StyledForm>

              <FormControl>
                <InputLabel id="category-select-label">Required *</InputLabel>
                <Select
                  name="category"
                  defaultValue=""
                  value={formValues.category}
                  onChange={handleInputChange}
                >
                  <MenuItem key="Apparel & Accessories" value="Apparel & Accessories">
                      Apparel & Accessories
                    </MenuItem>
                  <MenuItem key="Clothing" value="Clothing">
                      clothing
                    </MenuItem>
                  <MenuItem key="Furniture " value="Furniture">
                      Furniture
                    </MenuItem>

                </Select>
              </FormControl>
            </StyledForm>
          </Grid>
          <Grid item xs={3}>
            <Typography>Condition:</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <RadioGroup
                name="condition"
                value={formValues.condition}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  key="brand-new"
                  value="Brand New"
                  control={<Radio size="small" />}
                  label="Brand New"
                />
                <FormControlLabel
                  key="Excellent"
                  value="Excellent"
                  control={<Radio size="small" />}
                  label="Excellent"
                />
                <FormControlLabel
                  key="Good"
                  value="Good"
                  control={<Radio size="small" />}
                  label="Good"
                />
                <FormControlLabel
                  key="Acceptable"
                  value="Acceptable"
                  control={<Radio size="small" />}
                  label="Acceptable"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <Typography>description: </Typography>

          </Grid>
          <Grid item xs={3}>
            <TextField
              id="description-input"
              name="description"
              multiline
              rows={4}
              placeholder="my description blah blah"
              type="text"
              value={formValues.description}
              onChange={handleInputChange}
            />

          </Grid>
          <Grid item xs={2}>
            <Typography>Photos: </Typography>

          </Grid>
          <Grid item xs={3}>
            <Stack direction="column" alignItems="center" spacing={2}>

              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />

              </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />

              </label>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />

              </label>
            </Stack>

          </Grid>

        </Grid>
      </Container>
      <Divider />
    </>
  );
}
export default Listing;
