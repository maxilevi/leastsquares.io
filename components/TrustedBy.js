import React from "react";
//Trusted by over 5 very average small businesses

const logos = [
    {name: 'Laravel', url: '/assets/icons/laravel.svg'},
    {name: 'Go', url: '/assets/icons/go.svg'},
    {name: 'Steam', url: '/assets/icons/steam.svg'},
    {name: 'React', url: '/assets/icons/react.svg'},
    {name: 'Tensorflow', url: '/assets/icons/tensorflow.svg'},

    {name: 'GraphQL', url: '/assets/icons/graphql.svg'},
    {name: 'AWS', url: '/assets/icons/aws.svg'},
    {name: 'Next.Js', url: '/assets/icons/nextjs.svg'},
    {name: 'Android', url: '/assets/icons/android.svg'},
    {name: 'Unity', url: '/assets/icons/unity.svg'}
];

class Logo extends React.Component
{
    render()
    {
        return (
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img className="h-16" src={this.props.url} alt={this.props.name}/>
            </div>
        );
    }
}

export default class TrustedBy extends React.Component
{
    render()
    {
        const logosElements = logos.map((data) =>
            <Logo {...data} />
        );
        return (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
                    What we are known for
                </p>
                <div className="bg-white">
                    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            {logosElements}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}