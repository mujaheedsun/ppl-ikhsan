import { Button, Card, CardContent, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './FormComponent.css';


function FormComponent() {

  const [repoType, setRepoType] = useState('')
  const [projectType, setProjectType] = useState('')
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const STAGES = ['Start', 'Build', 'Test', 'Eject']
  const [stages, setStages] = useState([])

  const [showCard, setShowCard] = useState(false)

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

  const handleStages = (event) => {
    setStages(event.target.value);
  };

  const generate_file = () => {
    setShowCard(true);

    const element = document.createElement('a');
    
    const data = {
      repoType : repoType,
      projectType : projectType,
      projectName : projectName,
      projectDescription : projectDescription,
      stages : JSON.stringify(stages)
    };

    console.log(JSON.stringify(data));

    // http://localhost:8000/projects/
    
    fetch('https://mujaheedsun.pythonanywhere.com/projects/', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data),
    })
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      
      const file = new Blob([data], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "CI/CD File.txt";
      document.body.appendChild(element);
      element.click();
    })
    .catch((error) => {
      console.log('Error lagi broo : ', error)
    })
      
    
  };    

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
                    value={stages}
                    onChange={handleStages}
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
                
                <Button onClick={generate_file} variant='contained' color='success' startIcon={<CreateSharpIcon />}>Generate</Button>
                
                
              </Grid>

              {/* <Grid item>
                <button onClick={send_object} variant='contained'  startIcon={<FileDownloadIcon />}>Download</button>
                <a href={send_object}
                download='text_file.txt'
                rel='noopener noreferrer'>
                  Download Ci/CD File
                </a>
              </Grid> */}

            </Grid>

            <Grid container justifyContent = 'center'>
              <Grid item>
                {
                  showCard ?
                    <Card variant='outlined' sx={{
                      mt: 5,
                      borderRadius: 5,
                      bgcolor: '#ffa203',
                      width: 1,
                      
                    }}>
                      <CardContent>
                        <Typography> Project Details</Typography>
                        <br/>
                        <Typography>Repo Type : {repoType}</Typography>
                        <Typography>Project Type : {projectType}</Typography>
                        <Typography>Project Name : {projectName}</Typography>
                        <Typography>Project Description: {projectDescription}</Typography>
                        <Typography>Stage : {stages.map((stage) => (<Typography key={stage} display='inline'>{stage}  </Typography>))}
                        </Typography>
                      </CardContent>
                    </Card> : null
                }
              </Grid>
            </Grid>
            

          </Container>
        </CardContent>
      </Card>
    </>
  )
}

export default FormComponent