import { FC } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";
import Input from "./Input";

const commonStyles =
	"min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome: FC = () => {
	const isLoading = false;

	const connectWallet = (): void => {
		return;
	};

	const handleSubmit = (): void => {
		return;
	};

	return (
		<div className="flex w-full justify-center items-center">
			<div className="flex flex-col items-start justify-between py-12 px-4 md:p-20 mf:flex-row">
				<div className="flex flex-1 justify-start flex-col mf:mr-10">
					<h1 className="text-3xl text-white text-gradient py-1 sm:text-5xl">
						Send Crypto <br /> across the world
					</h1>
					<p className="text-left mt-5 text-white font-light w-11/12 text-base md:w-9/12">
						Explore the crypto world. Buy and sell cryptocurrencies easily on
						Krypto
					</p>
					<button
						onClick={connectWallet}
						className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer text-white font-semibold hover:bg-[#2546bd]"
					>
						Connect Wallet
					</button>
					<div className="grid grid-cols-2 w-full mt-10 sm:grid-cols-3">
						<div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
						<div className={commonStyles}>Security</div>
						<div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
						<div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
						<div className={commonStyles}>Low fees</div>
						<div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
					</div>
				</div>
				<div className="flex flex-col flex-1 items-center justify-start w-full mt-10 mf:mt-0">
					<div className="p-3 justify-end items-start flex-col rounded-xl h-40 w-full my-5 eth-card white-classmorphism sm:w-72">
						<div className="flex justify-between flex-col w-full h-full">
							<div className="flex justify-between items-start">
								<div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
									<SiEthereum fontSize={21} color="#fff" />
								</div>
								<BsInfoCircle fontSize={17} color="#fff" />
							</div>
							<div>
								<p className="text-white font-light text-sm">Address</p>
								<p className="text-white font-semibold text-lg mt-1">
									Ethereum
								</p>
							</div>
						</div>
					</div>
					<div className="p-5 w-full flex flex-col justify-start items-center blue-glassmorphism sm:w-96">
						<Input
							placeholder="Address To"
							name="addressTo"
							type="text"
							value=""
							handleChange={() => {
								return;
							}}
						/>
						<Input
							placeholder="Amount (ETH)"
							name="amount"
							type="number"
							value=""
							handleChange={() => {
								return;
							}}
						/>
						<Input
							placeholder="Keyword (GIF)"
							name="keyword"
							type="text"
							value=""
							handleChange={() => {
								return;
							}}
						/>
						<Input
							placeholder="Enter Message"
							name="message"
							type="text"
							value=""
							handleChange={() => {
								return;
							}}
						/>

						<div className="h-[1px] w-full bg-gray-400 my-2"></div>

						{isLoading ? (
							<Loader />
						) : (
							<button
								onClick={handleSubmit}
								className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
							>
								Send Now
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
