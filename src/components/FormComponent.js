import { Button, Card, CardContent, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import './FormComponent.css';

function FormComponent() {

  const [repoType, setRepoType] = useState('')
  const [projectType, setProjectType] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const STAGES = ['Start', 'Build', 'Test', 'Eject']
  const [stage, setStage] = useState([])

  const handleRepoType = (event) => {
    setRepoType(event.target.value);
  };

  const handleProjectType = (event) => {
    setProjectType(event.target.value);
  };

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescription = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleStage = (event) => {
    setStage(event.target.value);
  };

  const showAllValues = () => {
    console.log(repoType);
    console.log(projectType);
    console.log(projectName);
    console.log(projectDescription);
    console.log(stage);
  }

  return (
    <>
      <Card elevation={0}>
        <CardContent style={{ backgroundColor: `#FE9433` }}>
          <Typography align='center' variant='h3' sx={{mb:10}}>
            Project Details
          </Typography>

          <Container>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid xs={4} item>
                <Typography variant='h5'> Repository Type </Typography>
              </Grid>
              <Grid xs={8}item>
                <FormControl fullWidth>
                  <InputLabel>Repo Type</InputLabel>
                  <Select
                    value={repoType}
                    label="Repo Type label"
                    onChange={handleRepoType}
                  >
                    <MenuItem value={'Gitlab'}>Gitlab</MenuItem>
                    <MenuItem value={'Github'}>Github</MenuItem>
                    <MenuItem value={'Bitbucket'}>Bitbucket</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid xs={4} item>
                <Typography variant='h5'> Project Type </Typography>
              </Grid>
              <Grid xs={8} item>
                <FormControl fullWidth>
                  <InputLabel>Project Type</InputLabel>
                  <Select
                    value={projectType}
                    label="Project Type label"
                    onChange={handleProjectType}
                  >
                    <MenuItem value={'React'}>React</MenuItem>
                    <MenuItem value={'Django'}>Django</MenuItem>
                    <MenuItem value={'Springboot'}>Springboot</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid xs={4} item>
                <Typography variant='h5'> Project Name</Typography>
              </Grid>
              <Grid xs={8} item>
                <TextField onChange={handleProjectName} label='Project Name' placeholder='project name' variant='filled' fullWidth />
              </Grid>

              <Grid xs={4} item>
                <Typography variant='h5'> Project Description </Typography>
              </Grid>
              <Grid xs={8} item>
                <TextField onChange={handleProjectDescription} multiline rows={2} variant='filled' label='Project Description' placeholder='project desc' fullWidth />
              </Grid>

              <Grid xs={4} item>
                <Typography variant='h5'> Stage Included </Typography>
              </Grid>
              <Grid xs={8} item>
                <FormControl fullWidth>
                  <InputLabel>Stage(s)</InputLabel>
                  <Select
                    multiple
                    value={stage}
                    onChange={handleStage}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {STAGES.map((stage) => (
                      <MenuItem
                        key={stage}
                        value={stage}>
                        {stage}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <Button onClick={showAllValues} variant='contained' color='success' startIcon={<CreateSharpIcon />}>Generate</Button>
              </Grid>
            </Grid>

          </Container>
        </CardContent>
      </Card>
    </>
  )
}

export default FormComponent