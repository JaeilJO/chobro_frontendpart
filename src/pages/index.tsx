import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Layouts/Header/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { useAppDispatch } from '../redux/hooks';
import { setToken } from '../redux/features/userSlice';
import { wrapper } from '../redux/store';

const Home: NextPage = () => {
    console.log(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Indod29kbGY5N0BnbWFpbC5jb20iLCJzdWIiOiI0ZmE0YTM3MS05MjM0LTQ4ZWQtYjRkOC03ZDkzMmIyZjk2MTkiLCJpYXQiOjE2ODMxMDU1NTUsImV4cCI6MTY4NDMxNTE1NX0.tkSjGwplIuZ9v1NotG89rXwWJC3aksZRXitn23-GvuA' ===
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Indod29kbGY5N0BnbWFpbC5jb20iLCJzdWIiOiI0ZmE0YTM3MS05MjM0LTQ4ZWQtYjRkOC03ZDkzMmIyZjk2MTkiLCJpYXQiOjE2ODMxMDU1NTUsImV4cCI6MTY4NDMxNTE1NX0.tkSjGwplIuZ9v1NotG89rXwWJC3aksZRXitn23-GvuA'
    );
    return <div>Processing...</div>;
};

export default Home;
