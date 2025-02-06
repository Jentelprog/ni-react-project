const user ={
    name:'ilyes chanchah',
    imageUrl:'https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/274539446_721692032155828_2299204936654013901_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PXoUEObSUoEQ7kNvgHcvCli&_nc_oc=Adh29et1jHtqzwl5dSTzHiigpH9Q5Jpf73jd7DqUNbOgPfrrefYaKmnruTJdEoD9Z9E&_nc_zt=23&_nc_ht=scontent.ftun14-1.fna&_nc_gid=A6B1SJCVci7V79E_sk2u6XU&oh=00_AYAMo8vlUvZyhFLl5-Q5AXakGuGdJFgI3q534sqsiLVkgg&oe=67AAB9F8',
    imageSize:90,
};
export default function Profile() {
    return (
        <>
        <h1>{user.name}</h1>
        <img
        className="avatar"
        src={user.imageUrl}
        />
        </>
    );
  }
