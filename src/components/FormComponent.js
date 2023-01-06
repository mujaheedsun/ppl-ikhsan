import { Button, Card, CardContent, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState, useRef, useEffect } from 'react';
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DownloadIcon from '@mui/icons-material/Download';
import './FormComponent.css';


function FormComponent() {

  const [repoType, setRepoType] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const STAGES = ['Build', 'Test', 'Deploy'];
  const [stages, setStages] = useState([]);
  const [update, setUpdate] = useState(false);
  const fixRepoType = useRef('');
  const fixProjectType = useRef('');
  const fixProjectName = useRef('');
  const fixProjectDescription = useRef('');
  const fixStages = useRef([]);

  const [openProjectType, setOpenProjectType] = useState(false);
  const [openStages, setOpenStages] = useState(false);

  const [showCard, setShowCard] = useState(false);

  const handleRepoType = (event) => {
    setRepoType(event.target.value);

    if (repoType !== "") {
      setOpenProjectType(true)
    } ;
  };

  const handleProjectType = (event) => {
    setProjectType(event.target.value);

    if (projectType !== "") {
      setOpenStages(true);
    }  
  };

  useEffect(() => {
    if (repoType !== "") {
      setOpenProjectType(true)
    }

    if (projectType !== "") {
      setOpenStages(true)
    }
  }, [repoType, projectType])

  const handleProjectName = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescription = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleStages = (event) => {
    setStages(event.target.value);
  };

  const show_project_detail = () => {
  
    fixRepoType.current = repoType
    fixProjectType.current = projectType
    fixProjectName.current = projectName
    fixProjectDescription.current = projectDescription
    fixStages.current = stages

    setShowCard(true);
    setUpdate(!update);

    const data = {
      repoType: fixRepoType.current,
      projectType: fixProjectType.current,
      projectName: fixProjectName.current,
      projectDescription: fixProjectDescription.current,
      stages: JSON.stringify(fixStages.current)
    };

    console.log(JSON.stringify(data));
  };

  const download_file = () => {
    
    const element = document.createElement('a');

    const data = {
      repoType: fixRepoType.current,
      projectType: fixProjectType.current,
      projectName: fixProjectName.current,
      projectDescription: fixProjectDescription.current,
      stages: JSON.stringify(fixStages.current)
    };

    // http://localhost:8000/projects/

    fetch('https://mujaheedsun.pythonanywhere.com/projects/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data)

        const file = new Blob([data], {
          type: "text/x-yaml;charset=utf-8",
        });
        element.href = URL.createObjectURL(file);

        if (fixRepoType.current === 'Gitlab') {
          element.download = "gitlab-ci.yml";
        } else {
          element.download = "github-workflow.yml";
        }
        
        document.body.appendChild(element);
        element.click();
      })
      .catch((error) => {
        console.log('Error lagi broo : ', error)
      })
  }

  return (
    <>
      <Card elevation={0}>
        <CardContent style={{ backgroundColor: `#FE9433`}}>
          <Typography align='center' variant='h3' sx={{mb:10, mt:2}}>
            Project Details
          </Typography>

          <Container>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid xs={4} item>
                <Typography variant='h5'> Repository Type </Typography>
              </Grid>
              <Grid xs={8} item>
                <FormControl fullWidth required >
                  <InputLabel>Repo Type</InputLabel>
                  <Select
                    value={repoType}
                    label="Repo Type label"
                    onChange={handleRepoType}
                  >
                    <MenuItem value={'Gitlab'}>Gitlab</MenuItem>
                    <MenuItem value={'Github'}>Github</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid xs={4} item>
                <Typography variant='h5'> Project Type </Typography>
              </Grid>
              <Grid xs={8} item>
                <FormControl fullWidth required disabled={!openProjectType}>
                  <InputLabel>Project Type</InputLabel>
                  <Select
                    value={projectType}
                    label="Project Type label"
                    onChange={handleProjectType}
                  >
                    <MenuItem value={'React'}>React JS Node</MenuItem>
                    <MenuItem value={'Django'}>Django Python</MenuItem>

                    { (repoType === 'Gitlab') ? 
                      <MenuItem value={'Springboot'}>Springboot Maven</MenuItem> : null
                    }
                    
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
                <FormControl fullWidth required disabled={!openStages}>
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

                <Button onClick={show_project_detail} variant='contained' color='success' startIcon={<CreateSharpIcon />}>Generate</Button>


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

            <Grid
            container
            direction='column'
            justifyContent='flex-start'
            alignItems='center'
            >
              {
                showCard ?
                <>
                  <Grid item>
                    <Card variant='outlined' sx={{
                      mt: 5,
                      borderRadius: 5,
                      bgcolor: '#0edb0b',
                      width: 1,

                    }}>
                      <CardContent>
                        <Typography> Project Details</Typography>
                        <br />
                        <Typography>Repo Type : {fixRepoType.current}</Typography>
                        <Typography>Project Type : {fixProjectType.current}</Typography>
                        <Typography>Project Name : {fixProjectName.current}</Typography>
                        <Typography>Project Description: {fixProjectDescription.current}</Typography>
                        <Typography>Stage : {fixStages.current.map((stage) => (<Typography key={stage} display='inline'>{stage}  </Typography>))}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>

                  <Grid item sx={{mt:2}}>
                      <Button onClick={download_file} variant='contained' startIcon={<DownloadIcon />}>Download</Button>
                  </Grid>
                </> : null
              }
              
            </Grid>


          </Container>
        </CardContent>
      </Card>
    </>
  )
}

export default FormComponent