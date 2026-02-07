package com.bej.genuino.controller;

import com.bej.genuino.domain.Product;
import com.bej.genuino.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

  private final ProductService productService;

  public ProductController(ProductService productService) {
    this.productService = productService;
  }

  @GetMapping
  public List<Product> getAllProducts() {
    return productService.getAllProducts();
  }

  @PostMapping
  public Product addProduct(@RequestBody Product product) {
    return productService.saveProduct(product);
  }
}
