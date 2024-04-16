import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem({ listing }) {
	return (
		<div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[330px]">
			<Link
				to={`/listing/${listing._id}`}
				className="flex flex-col items-center gap-4"
			>
				<img
					src={listing.imageUrls[0]}
					alt="listing cover"
					className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
				/>
				<div className="p-3 flex flex-col gap-2 w-full">
					<p className="truncate text-lg font-semibold text-slate-700">
						{listing.name}
					</p>
					<div className="flex items-center gap-1">
						<MdLocationOn className="size-4 text-green-700" />
						<p className="text-sm text-gray-600 truncate">{listing.address}</p>
					</div>
					<p className="text-sm text-gray-600 line-clamp-2">
						{listing.description}
					</p>
					<p className="text-slate-500 mt-2 font-semibold">
						$
						{listing.offer
							? listing.discountPrice.toLocaleString("en-US")
							: listing.regularPrice.toLocaleString("en-US")}
						{listing.type === "rent" && " / month"}
					</p>
					<div className="flex flex-row gap-4 text-slate-700" >
						<p className="font-bold text-xs">
							{listing.bedrooms === 1
								? `${listing.bedrooms} Bed`
								: `${listing.bedrooms} Beds`}
						</p>
						<p className="font-bold text-xs">
							{listing.bathrooms === 1
								? `${listing.bathrooms} Bath`
								: `${listing.bathrooms} Baths`}
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
}
