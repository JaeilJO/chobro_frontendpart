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
    return <div>Processing...</div>;
};

export default Home;
