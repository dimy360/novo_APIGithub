import {
    Container,
    ProfilePicture
} from './styles';

const UserPicture = props => (
    <Container>
        <ProfilePicture src={props.url} alt="dimy360" />
    </Container>
);

export default UserPicture;