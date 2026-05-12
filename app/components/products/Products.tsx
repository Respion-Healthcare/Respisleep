"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "./productsData";

export default function Products() {
  const [category, setCategory] =
    useState("all");

  const [search, setSearch] =
    useState("");

  const filteredProducts = products.filter(
    (product) => {
      const matchesCategory =
        category === "all" ||
        product.category === category;

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||
        product.description
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        matchesCategory && matchesSearch
      );
    }
  );

  return (
    <section
      className="products"
      id="products"
    >
      {/* HEADER */}
      <div className="section-header">
        <div className="section-label">
          Full Catalog
        </div>

        <div className="section-title">
          All <span>Products</span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-wrap">
        <span className="search-icon">
          🔍
        </span>

        <input
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* FILTERS */}
      <div className="filter-bar">
        <button
          onClick={() =>
            setCategory("all")
          }
          className={`filter-btn ${
            category === "all"
              ? "active"
              : ""
          }`}
        >
          All
        </button>

        <button
          onClick={() =>
            setCategory("cpap")
          }
          className={`filter-btn ${
            category === "cpap"
              ? "active"
              : ""
          }`}
        >
          CPAP
        </button>

        <button
          onClick={() =>
            setCategory("bipap")
          }
          className={`filter-btn ${
            category === "bipap"
              ? "active"
              : ""
          }`}
        >
          BiPAP
        </button>

        {/* FIXED */}
        <button
          onClick={() =>
            setCategory("oc")
          }
          className={`filter-btn ${
            category === "oc"
              ? "active"
              : ""
          }`}
        >
          Oxygen Concentrators
        </button>

        {/* FIXED */}
        <button
          onClick={() =>
            setCategory("mask")
          }
          className={`filter-btn ${
            category === "mask"
              ? "active"
              : ""
          }`}
        >
          Masks
        </button>

        {/* FIXED */}
        <button
          onClick={() =>
            setCategory(
              "accessory"
            )
          }
          className={`filter-btn ${
            category ===
            "accessory"
              ? "active"
              : ""
          }`}
        >
          Accessories
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="prod-grid">
        {filteredProducts.length >
        0 ? (
          filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            )
          )
        ) : (
          <div className="no-products">
            <h3>
              No products found
            </h3>

            <p>
              Try another category or
              search keyword.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}