import { BackgroundImage, Button, Card, Center, Container, Grid, LoadingOverlay, Select, Stack, Text, Textarea, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import contactbg from '../../assets/explore.jpg'
import emailjs from '@emailjs/browser'
import { notifications } from '@mantine/notifications'
function Contactform() {
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const updateName = (e) => {
        setName(e.currentTarget.value)
        setNameError('')
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        setEmailError('')
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const updatePhonNumber = (e) => {
        setPhoneNumber(e.currentTarget.value)
        setPhoneNumberError('')
    }
    const [projects, setProjects] = useState(null)
    const [projectsError, setProjectsError] = useState('')
    const updateProjects = (value) => {
        setProjects(value)
        setProjectsError('')
    }
    const [desc, setDesc] = useState('')
    const [descError, setDescError] = useState('')
    const updateDesc = (e) => {
        setDesc(e.currentTarget.value)
        setDescError('')
    }
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoadingEffect(true)
        if (name === '') {
            setNameError('enter name')
            setIsLoadingEffect(false)
            return false
        }
        if (email === '') {
            setEmailError('enter email')
            setIsLoadingEffect(false)
            return false
        }
        if (phoneNumber === '') {
            setPhoneNumberError('enter phone number')
            setIsLoadingEffect(false)
            return false
        }
        if (projects === null) {
            setProjectsError('select project')
            setIsLoadingEffect(false)
            return false
        }
        if (desc === '') {
            setDescError('enter description')
            setIsLoadingEffect(false)
            return false
        }

        emailjs
            .sendForm('service_4nqr9zl', 'template_m9b92vo', form.current, {
                publicKey: 'Or1S7AvX78z2ZfC7-',
            })
            .then(
                () => {
                    setIsLoadingEffect(false)
                    console.log('SUCCESS!')
                    form.current.reset()
                    notifications.show({
                        title: 'Sucess',
                        message: 'ThankYou we have received your message',
                        color: 'green'
                    })
                    setName('')
                    setEmail('')
                    setPhoneNumber('')
                    setProjects(null)
                    setDesc('')

                },
                (error) => {
                    setIsLoadingEffect(false)
                    console.log('FAILED...', error.text)
                    notifications.show({
                        title: 'Error',
                        message: error.text,
                        color: 'red'
                    })
                },
            )

    }
    return (
        <Stack mb={20} >
            <BackgroundImage
                src={contactbg}
            >
                <div style={{ backgroundColor: '#19191994' }}>
                    <form ref={form} onSubmit={handleSubmit}>
                        <Grid p={30}>
                            <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
                                <Card withBorder >
                                    <Card.Section inheritPadding withBorder py={20}>
                                        <Text ta="center" fw={600} style={{ fontSize: "23px" }}>Get In touch with us</Text>
                                    </Card.Section>
                                    <Card.Section inheritPadding withBorder py={25}>
                                        <Grid>
                                            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                                                <TextInput
                                                    placeholder='Enter Name'
                                                    label="Name"
                                                    withAsterisk
                                                    name="name"
                                                    value={name}
                                                    error={nameError}
                                                    onChange={updateName}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                                                <TextInput
                                                    placeholder='Enter email'
                                                    label="Email"
                                                    withAsterisk
                                                    name='email'
                                                    value={email}
                                                    error={emailError}
                                                    onChange={updateEmail}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                                                <TextInput
                                                    placeholder='Enter phone number'
                                                    label="Phone Number"
                                                    withAsterisk
                                                    name='phoneNumber'
                                                    type='number'
                                                    value={phoneNumber}
                                                    error={phoneNumberError}
                                                    onChange={updatePhonNumber}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                                                <Select
                                                    label="Projects"
                                                    placeholder="select project"
                                                    withAsterisk
                                                    name='projects'
                                                    data={[
                                                        { value: 'Urban_fields', label: 'Urban fields' },
                                                        { value: 'Pruthvi_homes', label: 'Pruthvi homes' },
                                                        { value: 'pruthvi_vivantha', label: 'pruthvi vivantha' },
                                                        { value: 'Aadhya_Properties', label: 'Aadhya Properties' },
                                                    ]}
                                                    value={projects}
                                                    onChange={updateProjects}
                                                    error={projectsError}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                                                <Textarea
                                                    label="Description"
                                                    placeholder="Type here...."
                                                    withAsterisk
                                                    name='desc'
                                                    value={desc}
                                                    onChange={updateDesc}
                                                    error={descError}
                                                />
                                            </Grid.Col>
                                            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                                                <Button fullWidth size='md' color='dark' onClick={handleSubmit}>Submit</Button>
                                            </Grid.Col>
                                        </Grid>
                                    </Card.Section>
                                    <LoadingOverlay visible={isLoadingEffect} />
                                </Card>
                            </Grid.Col>
                        </Grid>
                    </form>
                </div>
            </BackgroundImage>
        </Stack>
    )
}

export default Contactform