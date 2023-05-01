import Header from '../components/Layouts/Header/Header';
import LoginModal from '../components/Modals/AuthModal/AuthModal';

const Active = () => {
    return (
        <>
            <Header />
        </>
    );
};

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    };
}

export default Active;
