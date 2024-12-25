import { BackgroundImage, Button, Card, Center, Checkbox, Container, Divider, Grid, Group, LoadingOverlay, MenuLabel, Select, Stack, Text, Textarea, TextInput } from '@mantine/core'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { notifications } from '@mantine/notifications'
import { useMediaQuery } from '@mantine/hooks'
function Getintouchform() {
    const isSmall = useMediaQuery('(max-width: 500px)');
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

    const [project, setProject] = useState(null)
    const [projectError, setProjectError] = useState('')
    const updateProject = (value) => {
        setProject(value)
        setProjectError('')
    }

    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const UpdateDescription = (e) => {
        setDescription(e.currentTarget.value)
        setDescriptionError('')
    }
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^\d{10}$/
        return phoneRegex.test(phone)
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
        } else if (!validateEmail(email)) {
            setEmailError('Enter a valid email')
            setIsLoadingEffect(false)
            return false
        }
        if (phoneNumber === '') {
            setPhoneNumberError('enter phone number')
            setIsLoadingEffect(false)
            return false
        } else if (!validatePhoneNumber(phoneNumber)) {
            setPhoneNumberError('Enter a valid 10-digit phone number')
            setIsLoadingEffect(false)
            return false
        }

        if (project === null) {
            setIsLoadingEffect(false)
            setProjectError('select project')
            return false
        }
        if (description === '') {
            setIsLoadingEffect(false)
            setDescriptionError('enter descrption')
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
                    setProject(null)
                    setDescription('')

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
        <div style={{ width: `${isSmall ? '100%' : '50%'}` }}>
            <form ref={form} onSubmit={handleSubmit}>
                <Card withBorder >
                    <Card.Section inheritPadding withBorder py={20}>
                        <Text ta="center" fw={700} size='xl'>Get In Touch With Us</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder py={20}>
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
                                    withAsterisk
                                    label="Projects"
                                    placeholder="select one"
                                    value={project}
                                    onChange={updateProject}
                                    error={projectError}
                                    data={['Mahidhara Fortune CMR PPR City', 'Satvik Fortune City', 'Pruthvi Homes', 'Pruthvi Vivantha', 'Urban Fields', 'Aadhya Properties']}
                                />
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                                <Textarea
                                    label="Description"
                                    placeholder='Type here....'
                                    withAsterisk
                                    value={description}
                                    onChange={UpdateDescription}
                                    error={descriptionError}
                                />
                            </Grid.Col>

                            <Button fullWidth size='md' color='dark' onClick={handleSubmit}>Submit</Button>
                        </Grid>
                    </Card.Section>
                    <LoadingOverlay visible={isLoadingEffect} />
                </Card>
            </form>
        </div>
    )
}

export default Getintouchform